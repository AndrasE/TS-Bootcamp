import * as dotenv from "dotenv";

const results = dotenv.config();

import "reflect-metadata";
import { AppDataSource } from "../data-source";
import { Lesson } from "./lesson";
import { Course } from "./course";

async function deleteDb() {
  await AppDataSource.initialize();
  console.log("Data connection initialized");

  console.log("Deleting lessons table");
  await AppDataSource.getRepository(Lesson).delete({});

  console.log("Deleting courses table");
  await AppDataSource.getRepository(Course).delete({});

  console.log("Database tables deleted, closing connection");
}

deleteDb()
  .then(() => {
    console.log("Database deleted");
    process.exit(0);
  })
  .catch((error) => {
    console.log("Error deleting database", error);
    process.exit(1);
  });
