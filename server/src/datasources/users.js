const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class UnsplashUsersAPI extends RESTDataSource {
   constructor() {
      super();
      this.baseURL = "https://api.unsplash.com/";
   }

   willSendRequest(request) {
      request.params.set("client_id", process.env.UNSPLASH_USER_ACCESS_KEY);
   }

   async getUserProfile(username) {
      return await this.get(`users/${username}`);
   }

   async getUserPortfolioLink(username) {
      return await this.get(`users/${username}/portfolio`);
   }

   async getUserPhotos(username) {
      return await this.get(`users/${username}/photos`);
   }

   async getUserLikedPhotos(username) {
      return await this.get(`users/${username}/likes`);
   }

   async getUserCollections(username) {
      return await this.get(`users/${username}/collections`);
   }

   async getUserStatistics(username) {
      return await this.get(`users/${username}/statistics`);
   }
}

module.exports = UnsplashUsersAPI;
