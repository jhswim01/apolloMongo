import "./dotenv";
import { ApolloServer, gql } from "apollo-server-express";
import { createApp } from "./app";
import express from "express";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!!!"
  }
};

const PORT: number | string = process.env.PORT || 4006;

const app: express.Application = createApp();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
