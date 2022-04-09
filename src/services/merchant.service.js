validateAddingMerchants

const MerchantRepoistory = require("../repositories/merchant.repository");
const MerchantValidator = require("../validators/merchant.validator");

class MerchantService{
    static async addMerchants(merchants){
        const merchants = await MerchantRepoistory.addMerchants(merchants);

        return merchants;
    }
}

module.exports = MerchantService;