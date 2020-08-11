import express from "express";

import cors from "cors";
import logger from "morgan";
// import helmet from "helmet";

export const createApp = (): express.Application => {
  const app: express.Application = express();

  app.use(logger("dev"));
  // app.use(helmet());
  app.use(cors());

  return app;
};
