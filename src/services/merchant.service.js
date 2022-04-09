const MerchantRepoistory = require("../repositories/merchant.repository");
const MerchantValidator = require("../validators/merchant.validator");

class MerchantService{
    static async addMerchants(merchants){
        const addedMerchants = await MerchantRepoistory.addMerchants(merchants);

        return addedMerchants;
    }
}

module.exports = MerchantService;