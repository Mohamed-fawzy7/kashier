const Joi = require("@hapi/joi");
const validateJoiResult = require("../helpers/validateJoiResults");
const { emailRegex } = require("./constants");
const merchantSchema = Joi.object().keys({
  name: Joi.string().required().min(1),
  email: Joi.string().required().regex(emailRegex),
});

const MerchantsSchema = Joi.array().items(merchantSchema);

class MerchantValidator {
  static validateAddingMerchants(merchants) {
    const validatationResult = MerchantsSchema.validate(merchants);

    validateJoiResult(validatationResult);
  }
}

module.exports = MerchantValidator;
