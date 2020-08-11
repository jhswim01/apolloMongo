import "./dotenv";
import { ApolloServer } from "apollo-server-express";
import { createApp } from "./app";
import express from "express";
import schema from "./schema";
import mongoose from "mongoose";

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hello world!!!"
//   }
// };

const PORT: number | string = process.env.PORT || 4000;

const app: express.Application = createApp();
const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true
});
server.applyMiddleware({ app });

mongoose
  .connect("mongodb://localhost:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✔ Successfully connected to mongoDB");
    app.listen({ port: PORT }, () =>
      console.log(
        `✔ Server ready at http://localhost:${PORT}${server.graphqlPath}`
      )
    );
  })
  .catch((e) => {
    console.log(e);
    console.log("fuck I failed");
  });
