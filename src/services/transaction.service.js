const CustomError = require("../config/customError");
const TransactionRepoistory = require("../repositories/transaction.repository");
const MerchantService = require("./merchant.service");

class TransactionService {
  static async addTransaction(transaction) {
    const { merchantId } = transaction;

    await MerchantService.validateMerchantExists(merchantId);

    const addedTransaction = await TransactionRepoistory.addTransaction(
      transaction
    );

    return addedTransaction;
  }

  static async getTransactions(filters) {
    const transactions = await TransactionRepoistory.getTransactions(filters);

    return transactions;
  }

  static async getTransaction(transactionId) {
    const transaction = await TransactionRepoistory.getTransaction({
      _id: transactionId,
    });

    if (!transaction) {
      throw new CustomError("no transaction found", 400);
    }

    return transaction;
  }

  static async deleteTransaction(transactionId) {
    const transaction = await TransactionRepoistory.getTransaction({
      _id: transactionId,
    });

    await TransactionRepoistory.deleteTransaction({ _id: transactionId });

    return transaction;
  }

  static async updateTransaction(transactionId, transactionInfo) {
    const transaction = await TransactionRepoistory.getTransaction({_id: transactionId});

    if(transactionInfo.merchantId){
      await MerchantService.validateMerchantExists(transactionInfo.merchantId);
    }

    const updatedTransaction = await TransactionRepoistory.updateTransaction(
      { _id: transactionId },
      transactionInfo
    );

    return updatedTransaction;
  }
}

module.exports = TransactionService;
