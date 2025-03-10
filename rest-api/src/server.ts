import * as dotenv from "dotenv";

const results = dotenv.config();

if (results.error) {
  console.log("Error loading .env file");
  process.exit(1);
  ``;
}

import express from "express";
import { root } from "./routes/root";
import { isInteger } from "./utils";
import { logger } from "./logger";
import { AppDataSource } from "./data-source";

const app = express();

function setupExpress() {
  app.route("/").get(root);
}

function startServer() {
  let port: number;

  const portEnv = process.env.PORT;
  const portArg = process.argv[2];

  if (isInteger(portEnv)) {
    port = parseInt(portEnv);
  }

  if (!port && isInteger(portArg)) {
    port = parseInt(portArg);
  }

  if (!port) {
    port = 3000;
  }

  app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });
}

AppDataSource.initialize()
  .then(() => {
    logger.info("Database connected");
    setupExpress();
    startServer();
  })
  .catch((error) => {
    logger.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  });
