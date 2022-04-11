const TransactionsService = require("../services/transaction.service");
const TransactionsValidator = require("../validators/transaction.validator");
const formulateErrorResponse = require("../helpers/formulateErrorResponse");

class TransactionsController {
  static async addTransaction(req, res) {
    try {
      const transaction = req.body;
      console.log({ transaction });
      TransactionsValidator.validateAddingTransaction(transaction);

      const addedTransaction = await TransactionsService.addTransaction(
        transaction
      );

      res.status(201).json({
        status: true,
        statusCode: 201,
        message: "transactions added successfully",
        data: addedTransaction,
      });
    } catch (error) {
      const errorResponse = formulateErrorResponse(error);

      res.status(errorResponse.statusCode).json(errorResponse);
    }
  }
}

module.exports = TransactionsController;
