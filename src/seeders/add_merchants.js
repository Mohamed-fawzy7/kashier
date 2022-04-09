require("dotenv").config();
require("../config/db");

const merchants = [
    {
        email: "mhmdsalm777@yahoo.com",
        name: "Mohamed Fawzy"
    },
    {
        email: "msayed@kashier.io",
        name: "Menna Sayed"
    }
]

const MerchantService = require("../services/merchant.service");

//to run this seeder run "node ./src/seeders/add_merchants.js" from project root directory
async function addMerchants(){
    try {
        console.log("====== start of add merchants seeder ======");
        
        await MerchantService.addMerchants(merchants)
    
        console.log("====== end of add merchants seeder ======")
    } catch(error) {
        console.log("====== failed to run add merchants seeder =======")
    }
}
addMerchants();


