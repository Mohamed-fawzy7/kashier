const TransactionsService = require("../services/transaction.service");
const TransactionsValidator = require("../validators/transaction.validator");
const formulateErrorResponse = require("../helpers/formulateErrorResponse");

class TransactionsController {
  static async addTransaction(req, res) {
    try {
      const transaction = req.body;
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

  static async getAllTransactions(req, res) {
    try {
      const transactions = await TransactionsService.getTransactions({});

      res.status(200).json({
        status: true,
        statusCode: 200,
        data: transactions,
      });
    } catch (error) {
      const errorResponse = formulateErrorResponse(error);

      res.status(errorResponse.statusCode).json(errorResponse);
    }
  }

  static async getTransaction(req, res) {
    try {
      const transactionId = req.params.transactionId;
      TransactionsValidator.validateMongoId(transactionId);
      const transaction = await TransactionsService.getTransaction(
        transactionId
      );

      res.status(200).json({
        status: true,
        statusCode: 200,
        data: transaction,
      });
    } catch (error) {
      const errorResponse = formulateErrorResponse(error);

      res.status(errorResponse.statusCode).json(errorResponse);
    }
  }

  static async deleteTransaction(req, res) {
    try {
      const transactionId = req.params.transactionId;
      TransactionsValidator.validateMongoId(transactionId);
      const transaction = await TransactionsService.deleteTransaction(
        transactionId
      );

      res.status(200).json({
        status: true,
        statusCode: 200,
        message: "transaction deleted successfully",
        data: transaction,
      });
    } catch (error) {
      const errorResponse = formulateErrorResponse(error);

      res.status(errorResponse.statusCode).json(errorResponse);
    }
  }

  static async updateTransaction(req, res) {
    try {
      const transactionId = req.params.transactionId;
      TransactionsValidator.validateMongoId(transactionId);
      const transactionInfo = req.body;
      TransactionsValidator.validateUpdateTransaction(transactionInfo);
      const transaction = await TransactionsService.updateTransaction(
        transactionId,
        transactionInfo
      );

      res.status(200).json({
        status: true,
        statusCode: 200,
        message: "transaction updated successfully",
        data: transaction,
      });
    } catch (error) {
      const errorResponse = formulateErrorResponse(error);

      res.status(errorResponse.statusCode).json(errorResponse);
    }
  }
}

module.exports = TransactionsController;
