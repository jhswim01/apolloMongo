import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

mongoose
  .connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to mongoDB");
    app.listen({ port: 4000 }, () =>
      console.log(
        `✔ Server ready at http://localhost:4000${server.graphqlPath}`
      )
    );
  })
  .catch((e) => {
    console.log(e);
    console.log("fuck I failed");
  });
