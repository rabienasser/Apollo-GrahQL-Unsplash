const { RESTDataSource } = require("apollo-datasource-rest");

class UnsplashAPI extends RESTDataSource {
   constructor() {
      super();
      this.baseURL = "https://api.unsplash.com/";
   }

   willSendRequest(request) {
      request.params.set(
         "client_id",
         "8RCHWAofbB8kxnbqZcPbgLFqyaeHSV3QCLqipVj3vXY"
      );
   }

   getUserProfile(username) {
      return this.get(`users/${username}`);
   }

   getUserPortfolioLink(username) {
      return this.get(`users/${username}/portfolio`);
   }

   getUserPhotos(username) {
      return this.get(`users/${username}/photos`);
   }

   getUserLikedPhotos(username) {
      return this.get(`users/${username}/likes`);
   }

   getUserCollections(username) {
      return this.get(`users/${username}/collections`);
   }

   getUserStatistics(username) {
      return this.get(`users/${username}/statistics`);
   }
}

module.exports = UnsplashAPI;
