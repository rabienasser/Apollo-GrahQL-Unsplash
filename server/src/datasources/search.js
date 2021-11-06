const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class UnsplashSearchAPI extends RESTDataSource {
   constructor() {
      super();

      this.baseURL = "https://api.unsplash.com";
   }

   willSendRequest(request) {
      request.params.set("client_id", process.env.UNSPLASH_USER_ACCESS_KEY);
   }

   async searchPhotos(query, page, per_page) {
      return await this.get("search/photos", {
         query,
         page,
         per_page,
      });
   }

   async searchCollections(query, page, per_page) {
      return await this.get("search/collections", {
         query,
         page,
         per_page,
      });
   }

   async searchUsers(query, page, per_page) {
      return await this.get("/search/users", {
         query,
         page,
         per_page,
      });
   }
}

module.exports = UnsplashSearchAPI;
