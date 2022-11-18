import { ApolloServer, gql } from "apollo-server";

const myTypeDefs = gql`
  type Query {
    hello: String
    # fetchBoardsCount: Int!
  }
`;

const myResolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
  },
};
const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`server ready at ${url} on port ${3001}`);
});
