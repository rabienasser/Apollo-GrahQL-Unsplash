const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const UnsplashAPI = require("./datasources/unsplash-api");

const server = new ApolloServer({
   typeDefs,
   resolvers,
   dataSources: () => {
      return {
         unsplashAPI: new UnsplashAPI(),
      };
   },
});

server.listen().then(() => {
   console.log("Server is running");
});
