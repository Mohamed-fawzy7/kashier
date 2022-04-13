const TimeUtils = require("../helpers/time.utils");
const Utils = require("../helpers/utils");
const MerchantService = require("./merchant.service");
const TransactionService = require("./transaction.service");
const MailService = require("./mail.service");

class CronService {
  static async sendTransactionsReports() {
    const { startOfDay, endOfDay } = TimeUtils.getLastDayStartAndEnd();
    const todayTransactions = await TransactionService.getTransactions({
      createdAt: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
    });

    const { merchantsIds, merchantIdToTransactionsMap } =
      Utils.generateMerchantIdToTransactionsMap(todayTransactions);

    const merchants = await MerchantService.getMerchants({
      _id: { $in: merchantsIds },
    });

    const mailPromises = merchants.map((merchant) => {
      const merchantTransactionsToday =
        merchantIdToTransactionsMap[merchant._id];

      const transactionHtml = Utils.composeTransactionsHtml(merchantTransactionsToday);

      const html = `
      <h2>Hello ${merchant.name}, Here are your transactions for today</h2> 
      <ol>${transactionHtml}</ol>
      `

      return MailService.sendMail({
        receiverEmail: merchant.email,
        subject: "Today's transactions",
        html
      });
    });

    await Promise.all(mailPromises);
  }
}

module.exports = CronService;
