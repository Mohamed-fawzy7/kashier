const express = require("express");
const TransactionsController = require("../controllers/transaction.controller");
const TransactionRouter = express.Router();

TransactionRouter.post("/", TransactionsController.addTransaction);
TransactionRouter.get("/", TransactionsController.getAllTransactions);
TransactionRouter.get("/:transactionId", TransactionsController.getTransaction);
TransactionRouter.delete("/:transactionId", TransactionsController.deleteTransaction);
TransactionRouter.put("/:transactionId", TransactionsController.updateTransaction);

module.exports = TransactionRouter;
