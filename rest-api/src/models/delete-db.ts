import * as dotenv from "dotenv";

const results = dotenv.config();

import "reflect-metadata";
import { AppDataSource } from "../data-source";
import { Lesson } from "./lesson";
import { Course } from "./course";
import { User } from "./user";

async function deleteDb() {
  await AppDataSource.initialize();
  console.log("Data connection initialized");

  console.log("Deleting LESSONS table");
  await AppDataSource.getRepository(Lesson).delete({});

  console.log("Deleting COURSES table");
  await AppDataSource.getRepository(Course).delete({});

  console.log("Deleting USERS table");
  await AppDataSource.getRepository(User).delete({});

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
