class Utils {
  static generateMerchantIdToTransactionsMap(transactions) {
    const merchantsIdsSet = new Set();
    const merchantIdToTransactionsMap = {};
    for (const transaction of transactions) {
      merchantsIdsSet.add(transaction.merchantId.toString());

      if (!merchantIdToTransactionsMap[transaction.merchantId]) {
        merchantIdToTransactionsMap[transaction.merchantId] = [transaction];
      } else {
        merchantIdToTransactionsMap[transaction.merchantId].push(transaction);
      }
    }

    const uniqueMerchantsIds = [...merchantsIdsSet];

    return {
      merchantsIds: uniqueMerchantsIds,
      merchantIdToTransactionsMap,
    };
  }

  static composeTransactionsHtml(transactions) {
    const html = transactions
      .map(
        (transaction) =>
          `<li>${transaction.operation} ${transaction.amount} ${transaction.currency}</li>`
      )
      .join(" ");

    return html;
  }
}

module.exports = Utils;
