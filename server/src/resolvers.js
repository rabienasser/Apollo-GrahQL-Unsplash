const resolvers = {
  Query: {
    userProfile: (_, { username }, { dataSources }) => {
      return dataSources.unsplashAPI.getUserProfile(username);
    },
    userPortfolioLink: (_, { username }, { dataSources }) => {
      return dataSources.unsplashAPI.getUserPortfolioLink(username);
    },
    userPhotos: (_, { username }, { dataSources }) => {
      return dataSources.unsplashAPI.getUserPhotos(username);
    },
    userLikedPhotos: (_, { username }, { dataSources }) => {
      return dataSources.unsplashAPI.getUserLikedPhotos(username);
    },
    userCollections: (_, { username }, { dataSources }) => {
      return dataSources.unsplashAPI.getUserCollections(username);
    },
    userStatistics: (_, { username }, { dataSources }) => {
      return dataSources.unsplashAPI.getUserStatistics(username);
    },

    getAllPhotos: (_, { currentPage, limit, order }, { dataSources }) => {
      return dataSources.unsplashPhotosAPI.getAllPhotos(
        currentPage,
        limit,
        order
      );
    },
    getPhoto: (_, { id }, { dataSources }) => {
      return dataSources.unsplashPhotosAPI.getPhoto(id);
    },
    getRandomPhoto: (_, { photoCount, query, username }, { dataSources }) => {
      return dataSources.unsplashPhotosAPI.getRandomPhoto(
        photoCount,
        query,
        username
      );
    },
    getPhotoStatistics: (_, { id, resolution, quantity }, { dataSources }) => {
      return dataSources.unsplashPhotosAPI.getPhotoStatistics(
        id,
        resolution,
        quantity
      );
    },
  },
};

module.exports = resolvers;
