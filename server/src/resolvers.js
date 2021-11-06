const resolvers = {
   Query: {
      //  USERS
      userProfile: (_, { username }, { dataSources }) => {
         return dataSources.unsplashUsersAPI.getUserProfile(username);
      },
      userPortfolioLink: (_, { username }, { dataSources }) => {
         return dataSources.unsplashUsersAPI.getUserPortfolioLink(username);
      },
      userPhotos: (_, { username }, { dataSources }) => {
         return dataSources.unsplashUsersAPI.getUserPhotos(username);
      },
      userLikedPhotos: (_, { username }, { dataSources }) => {
         return dataSources.unsplashUsersAPI.getUserLikedPhotos(username);
      },
      userCollections: (_, { username }, { dataSources }) => {
         return dataSources.unsplashUsersAPI.getUserCollections(username);
      },
      userStatistics: (_, { username }, { dataSources }) => {
         return dataSources.unsplashUsersAPI.getUserStatistics(username);
      },

      // PHOTOS
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
      getPhotoStatistics: (
         _,
         { id, resolution, quantity },
         { dataSources }
      ) => {
         return dataSources.unsplashPhotosAPI.getPhotoStatistics(
            id,
            resolution,
            quantity
         );
      },

      // SEARCH
      searchPhotos: (_, { query, page, per_page }, { dataSources }) => {
         return dataSources.unsplashSearchAPI.searchPhotos(
            query,
            page,
            per_page
         );
      },

      searchCollections: (_, { query, page, per_page }, { dataSources }) => {
         return dataSources.unsplashSearchAPI.searchCollections(
            query,
            page,
            per_page
         );
      },

      searchUsers: (_, { query, page, per_page }, { dataSources }) => {
         return dataSources.unsplashSearchAPI.searchUsers(
            query,
            page,
            per_page
         );
      },
   },
};

module.exports = resolvers;
