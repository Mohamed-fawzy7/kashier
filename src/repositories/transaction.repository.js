const Transaction = require("../models/transaction.model");

class TransactionRepoistory {
  static async addTransaction(transaction) {
    const newTransaction = new Transaction(transaction);

    const addedTransaction = await newTransaction.save();

    return addedTransaction;
  }
}

module.exports = TransactionRepoistory;
