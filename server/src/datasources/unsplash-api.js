const { RESTDataSource } = require("apollo-datasource-rest");

class UnsplashAPI extends RESTDataSource {
   constructor() {
      super();
      this.baseURL = "https://api.unsplash.com/";
   }
}

module.exports = UnsplashAPI;
