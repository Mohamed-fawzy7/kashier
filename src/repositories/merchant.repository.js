const Merchant = require("../models/merchant.model");

class MerchantRepoistory{
    static async addMerchants(merchants){
        const addedMerchants = await Merchant.insertMany(merchants);
        
        return addedMerchants;
    }
}

module.exports = MerchantRepoistory;