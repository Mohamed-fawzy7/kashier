const Joi = require("@hapi/joi");
const validateJoiResult = require("../helpers/validateJoiResults");
const { currencies, operations } = require("./constants");

const mongoId = Joi.string().regex(/^[0-9a-fA-F]{24}$/u);

const requiredMongoId = mongoId.required();

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

const updateTransactionSchema = Joi.object()
  .keys({
    merchantId: mongoId,
    amount: Joi.number().min(1),
    currency: Joi.string()
      .valid(...currencies),
    operation: Joi.string()
      .valid(...operations),
  })
  .required();

const mongoIdSchema = requiredMongoId;
class TransactionValidator {
  static validateAddingTransaction(transaction) {
    const validatationResult = transactionSchema.validate(transaction);

    validateJoiResult(validatationResult);
  }

  static validateMongoId(id) {
    const validatationResult = mongoIdSchema.validate(id);

    validateJoiResult(validatationResult);
  }

  static validateUpdateTransaction(transactionInfo) {
    const validatationResult = updateTransactionSchema.validate(transactionInfo);

    validateJoiResult(validatationResult);
  }
}

module.exports = TransactionValidator;
