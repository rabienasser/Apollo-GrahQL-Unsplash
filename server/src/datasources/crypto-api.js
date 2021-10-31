const { RESTDataSource } = require("apollo-datasource-rest");

class CryptoAPI extends RESTDataSource {
   constructor() {
      super();
      this.baseURL = "https://api.coingecko.com/api/v3/";
   }

   getCoins() {
      return this.get(
         "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );
   }

   getGlobalData() {
      return this.get("global");
   }
}

module.exports = CryptoAPI;
