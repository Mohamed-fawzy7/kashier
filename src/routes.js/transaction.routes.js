const express = require("express");
const TransactionsController = require("../controllers/transaction.controller");
const TransactionRouter = express.Router();

TransactionRouter.post("/", TransactionsController.addTransaction);

module.exports = TransactionRouter;
