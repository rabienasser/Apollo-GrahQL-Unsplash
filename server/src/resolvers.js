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
   },
};

module.exports = resolvers;
