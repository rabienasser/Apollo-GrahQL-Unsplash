const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class UnsplashAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.unsplash.com/';
  }

  willSendRequest(request) {
    request.params.set('client_id', process.env.UNSPLASH_USER_ACCESS_KEY);
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
