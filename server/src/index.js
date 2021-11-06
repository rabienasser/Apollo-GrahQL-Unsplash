const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const UnsplashUsersAPI = require("./datasources/users");
const UnsplashPhotosAPI = require("./datasources/photos");
const UnsplashSearchAPI = require("./datasources/search");

const server = new ApolloServer({
   typeDefs,
   resolvers,
   dataSources: () => {
      return {
         unsplashUsersAPI: new UnsplashUsersAPI(),
         unsplashPhotosAPI: new UnsplashPhotosAPI(),
         unsplashSearchAPI: new UnsplashSearchAPI(),
      };
   },
});

server.listen().then(() => {
   console.log(
      "Server is running explore at https://studio.apollographql.com/sandbox"
   );
});
