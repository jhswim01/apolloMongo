import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import { Cat } from "./models/Cat";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Mutation {
    hello: String
  }
  type Query {
    user: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Mutation: {
    hello: async () => {
      const kitty = new Cat({ name: "heetty" });
      await kitty.save();
      return "Hello world!";
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

mongoose
  .connect("mongodb://localhost:27017/admin", {
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

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model("Kitten", kittySchema);
