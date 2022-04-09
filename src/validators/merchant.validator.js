const Joi = require("@hapi/joi");
const { emailRegex } = require("./constants");
const merchantSchema = Joi.object.keys({
  name: Joi.string().required().min(1),
  email: Joi.string().required().regex(emailRegex),
});

const MerchantsSchema = Joi.array(merchantSchema);

class MerchantValidator {
  validateAddingMerchants(merchants) {
    const validatationResult = MerchantsSchema.validate(merchants);

    this.validateJoiResult(validatationResult);
  }

  static validateJoiResult(validationResult) {
    if (
        validationResult &&
        validationResult.error &&
        validationResult.error.details &&
        validationResult.error.details.length
    ) {
        const { details } = validationResult.error;
        const JoiError = {
            param: details[0].path[0],
            message: details[0].message.replace(/['"]/gu, ''),
            code: ''
        };

        throw new CustomError(JoiError, 400);
    }
}
}

module.exports = MerchantValidator;
