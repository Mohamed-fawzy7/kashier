const MerchantRepoistory = require("../repositories/merchant.repository");

class MerchantService {
  static async addMerchants(merchants) {
    const addedMerchants = await MerchantRepoistory.addMerchants(merchants);

    return addedMerchants;
  }

  static async getMerchant(filters) {
    const merchant = await MerchantRepoistory.getMerchant(filters);

    return merchant;
  }
}

module.exports = MerchantService;
