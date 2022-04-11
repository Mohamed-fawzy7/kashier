const mongoose = require('mongoose');
const { Schema } = mongoose;
const {currencies, operations } = require("../validators/constants");

const TransactionSchema = new Schema(
    {
        amount: { type: Number, required: true, min: 0 },
        merchantId: { type: Schema.Types.ObjectId, ref: 'Merchant', required: true },
        currency: {
            type: String,
            enum: currencies,
            required: true
        },
        operation: {
            type: String,
            enum: operations,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Transaction', TransactionSchema);
