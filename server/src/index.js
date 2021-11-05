const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const UnsplashAPI = require('./datasources/unsplash-api');
const UnsplashPhotosAPI = require('./datasources/photos');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      unsplashAPI: new UnsplashAPI(),
      unsplashPhotosAPI: new UnsplashPhotosAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(
    'Server is running explore at https://studio.apollographql.com/sandbox'
  );
});
