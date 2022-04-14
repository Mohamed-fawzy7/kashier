const CronJob = require("cron").CronJob;
const CronService = require("../services/cron.service");
const transactionsReportSender = new CronJob("0 0 * * *", async function () {
    try {
        await CronService.sendTransactionsReports()
        console.log("sent emails")
    } catch(error){
        console.log(error);
    }
});
transactionsReportSender.start();
