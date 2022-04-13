const Merchant = require("../models/merchant.model");

class MerchantRepoistory {
  static async addMerchants(merchants) {
    const addedMerchants = await Merchant.insertMany(merchants);

    return addedMerchants;
  }

  static async getMerchant(filters) {
    const merchant = await Merchant.findOne(filters);

    return merchant;
  }

  static async getMerchants(filters) {
    const merchants = await Merchant.find(filters);

    return merchants;
  }
}

module.exports = MerchantRepoistory;
