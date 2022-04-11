const Transaction = require("../models/transaction.model");

class TransactionRepoistory {
  static async addTransaction(transaction) {
    const newTransaction = new Transaction(transaction);

    const addedTransaction = await newTransaction.save();

    return addedTransaction;
  }

  static async getTransactions(filters) {
    const transactions = await Transaction.find(filters);

    return transactions;
  }

  static async getTransaction(filters) {
    const transaction = await Transaction.findOne(filters);

    return transaction;
  }

  static async deleteTransaction(filters) {
    const transaction = await Transaction.deleteOne(filters);
  }

  static async updateTransaction(filters, transactionInfo) {
    const transaction = await Transaction.findOneAndUpdate(
      filters,
      transactionInfo,
      { new: true }
    );

    return transaction;
  }
}

module.exports = TransactionRepoistory;
