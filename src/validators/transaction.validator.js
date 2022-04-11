const Joi = require("@hapi/joi");
const validateJoiResult = require("../helpers/validateJoiResults");
const { currencies, operations } = require("./constants");

const requiredMongoId = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/u)
  .required();

const transactionSchema = Joi.object()
  .keys({
    merchantId: requiredMongoId,
    amount: Joi.number().required().min(1),
    currency: Joi.string()
      .required()
      .valid(...currencies),
    operation: Joi.string()
      .required()
      .valid(...operations),
  })
  .required();

class TransactionValidator {
  static validateAddingTransaction(transaction) {
    console.log({ transaction });
    const validatationResult = transactionSchema.validate(transaction);

    validateJoiResult(validatationResult);
  }
}

module.exports = TransactionValidator;
