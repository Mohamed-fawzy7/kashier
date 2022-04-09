const Merchant = require("../models/merchant.model");

class MerchantRepoistory{
    static async addMerchants(merchants){
        const merchants = await Merchant.insertMany(merchants);
        return merchants;
    }
}

module.exports = MerchantRepoistory;