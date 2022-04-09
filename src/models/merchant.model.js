const mongoose = require('mongoose');
const { Schema } = mongoose;
const {emailRegex} = require("../validators/constants");

const MerchantSchema = new Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            required: true,
            match: emailRegex
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Merchant', MerchantSchema);
