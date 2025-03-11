import * as dotenv from "dotenv";

const results = dotenv.config();

import "reflect-metadata";

import { COURSES } from "./db-data";
import { AppDataSource } from "../data-source";

async function populateDb() {
  await AppDataSource.initialize();
  console.log("Data connection initialized");
}

populateDb()
  .then(() => {
    console.log("Populating database with seed data");
    process.exit(0);
  })
  .catch((error) => {
    console.log("Error populating database with seed data", error);
    process.exit(1);
  });
