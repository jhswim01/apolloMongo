import "./dotenv";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import createDBConnection from "./db";
import express from "express";
import schema from "./schema";

const PORT: number | string = process.env.PORT || 4000;

const db = createDBConnection();
const apolloServer = new ApolloServer({ schema });
const app = express();

// app.use(logger("dev"));
apolloServer.applyMiddleware({ app, cors: false });
app.use(cors());

db.once("open", () => {
  console.log("✔ Successfully connected to mongoDB");
  app.listen({ port: PORT }, () =>
    console.log(
      `✔ Apollo Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
    )
  );
});

db.on("error", (e) => {
  console.log(e);
  console.log("mongo failed");
});
