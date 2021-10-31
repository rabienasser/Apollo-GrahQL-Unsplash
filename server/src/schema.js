const { gql } = require("apollo-server");

const typedefs = gql`
   type Query {
      coins: [Coin!]!
      globalData: GlobalData
   }

   type Coin {
      id: String!
      symbol: String!
      name: String!
      image: String
      current_price: String!
      market_cap_rank: Int!
      high_24h: String!
      low_24h: String!
   }

   type GlobalData {
      data: Data
   }

   type Data {
      active_cryptocurrencies: Int!
      markets: Int!
   }
`;

module.exports = typedefs;
