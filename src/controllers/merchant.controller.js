const MerchantService = require("../services/merchant.service");
const MerchantValidator = require("../validators/merchant.validator");
const formulateErrorResponse = require("../helpers/formulateErrorResponse");

class MerchantController {
  static async addMerchants(req, res) {
    try {
      const merchants = req.body;
      MerchantValidator.validateAddingMerchants(merchants);

      const addedMerchants = await MerchantService.addMerchants(merchants);

      res.status(201).json({
        status: true,
        statusCode: 201,
        message: "merchants added successfully",
        data: addedMerchants,
      });
    } catch (error) {
      const errorResponse = formulateErrorResponse(error);

      res.status(errorResponse.statusCode).json(errorResponse);
    }
  }
}

module.exports = MerchantController;
