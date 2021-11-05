const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class UnsplashPhotosAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = 'https://api.unsplash.com';
  }

  willSendRequest(request) {
    request.params.set('client_id', process.env.UNSPLASH_PHOTOS_ACCESS_KEY);
  }

  async getAllPhotos(page = '1', limit = '10', order = 'latest') {
    return await this.get(`/photos`, {
      //query parameters
      page,
      per_page: limit,
      order_by: order,
    });
  }

  async getPhoto(id) {
    return await this.get(`/photos/${id}`);
  }

  async getRandomPhoto(count = '1', query = '', username = '') {
    return await this.get(`/photos/random`, {
      //query parameters
      count,
      query,
      username,
    });
  }

  async getPhotoStatistics(id, resolution = 'days', quantity = '30') {
    return await this.get(`/photos/${id}/statistics`, {
      //query params
      resolution,
      quantity,
    });
  }
}

module.exports = UnsplashPhotosAPI;
