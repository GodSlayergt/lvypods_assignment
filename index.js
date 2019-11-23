const { ApolloServer, gql } = require('apollo-server');
const uuid = require('uuid/v4');

const typeDefs = gql`
  type Quote {
    id: ID!
    phrase: String!
    quotee: String
  }

  type Query {
    quotes: [Quote]
  }
`;

const quotes = {};
const addQuote = quote => {
  const id = uuid();
  return quotes[id] = { ...quote, id };
};

// Start with a few initial quotes
addQuote({ phrase: "I'm a leaf on the wind. Watch how I soar.", quotee: "Wash" });
addQuote({ phrase: "We're all stories in the end.", quotee: "The Doctor" });
addQuote({ phrase: "Woah!", quotee: "Neo" });

const resolvers = {
  Query: {
    quotes: () => Object.values(quotes),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
});