const resolvers = {
   Query: {
      coins: (_, __, { dataSources }) => {
         return dataSources.cryptoAPI.getCoins();
      },
      globalData: (_, __, { dataSources }) => {
         return dataSources.cryptoAPI.getGlobalData();
      },
   },
};

module.exports = resolvers;
