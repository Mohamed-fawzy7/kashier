const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionSchema = new Schema(
    {
        amount: { type: Number, required: true, min: 0 },
        merchantId: { type: Schema.Types.ObjectId, ref: 'Merchant', required: true },
        currency: {
            type: String,
            enum: ["USD", "EGP", "EUR"],
            required: true
        },
        operation: {
            type: String,
            enum: ["pay", "refund"],
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Transaction', TransactionSchema);
