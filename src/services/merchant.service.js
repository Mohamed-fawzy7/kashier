const MerchantRepoistory = require("../repositories/merchant.repository");
const CustomError = require("../config/customError");

class MerchantService {
  static async addMerchants(merchants) {
    const addedMerchants = await MerchantRepoistory.addMerchants(merchants);

    return addedMerchants;
  }

  static async getMerchant(filters) {
    const merchant = await MerchantRepoistory.getMerchant(filters);

    return merchant;
  }

  static async getMerchants(filters) {
    const merchants = await MerchantRepoistory.getMerchants(filters);

    return merchants;
  }

  static async validateMerchantExists(merchantId) {
    const merchant = await this.getMerchant({ _id: merchantId });

    if (!merchant) {
      throw new CustomError("merchant doesn't exist", 400);
    }
  }
}

module.exports = MerchantService;
