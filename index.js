const express = require("express");
const TransactionRouter = require("./src/routes.js/transaction.routes");
const app = express();
require("dotenv").config();

require("./src/config/db");
require("./src/config/crons");

app.use(express.json());
app.use("/transactions", TransactionRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
