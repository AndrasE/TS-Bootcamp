import express from "express";
import { root } from "./routes/root";
import { isInteger } from "./utils";

const app = express();

function setupExpress() {
  app.route("/").get(root);
}

function startServer() {
  let port: number;

  const portArg = process.argv[2];

  if (isInteger(portArg)) {
    port = parseInt(portArg);
  }

  if (!port) {
    port = 3000;
  }

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

setupExpress();

startServer();
