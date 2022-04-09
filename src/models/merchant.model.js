const mongoose = require('mongoose');
const { Schema } = mongoose;

const MerchantSchema = new Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Merchant', MerchantSchema);
