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
}

module.exports = TransactionService;
