import "./dotenv";
import { ApolloServer } from "apollo-server-express";
import { createApp } from "./app";
import createDBConnection from "./db";
import express from "express";
import schema from "./schema";
import { Connection } from "mongoose";

const PORT: number | string = process.env.PORT || 4000;

const app: express.Application = createApp();
const server = new ApolloServer({ schema });
server.applyMiddleware({ app, cors: false });

const db: Connection = createDBConnection();

db.once("open", () => {
  console.log("✔ Successfully connected to mongoDB");
  app.listen({ port: PORT }, () =>
    console.log(
      `✔ Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
});

db.on("error", (e) => {
  console.log(e);
  console.log("fuck I failed");
});
