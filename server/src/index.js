const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const CryptoAPI = require("./datasources/crypto-api");

const server = new ApolloServer({
   typeDefs,
   resolvers,
   dataSources: () => {
      return {
         cryptoAPI: new CryptoAPI(),
      };
   },
});

server.listen().then(() => {
   console.log("Server is running");
});
