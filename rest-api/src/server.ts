import * as dotenv from "dotenv";

const results = dotenv.config();

if (results.error) {
  console.log("Error loading .env file");
  process.exit(1);
  ``;
}

import "reflect-metadata";
import express from "express";
import { root } from "./routes/root";
import { isInteger } from "./utils";
import { logger } from "./logger";
import { AppDataSource } from "./data-source";
import { gettAllCourses } from "./routes/get-all-courses";
import { defaultErrorHandler } from "./middlewares/default-error-handling";
import { findCourseByUrl } from "./routes/find-course-by-url";
import { findLessonForCourse } from "./routes/find-lesson-for-course";
import { updateCourse } from "./routes/update-course";
import { createCourse } from "./routes/create-course";
import { deleteCourseAndLessons } from "./routes/delete-course";
import { createUser } from "./routes/create-user";
import { login } from "./routes/login";
import { checkIfAuthenticated } from "./middlewares/authentication-middleware";
import { checkIfAdmin } from "./middlewares/admin-only-middleware";

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

function setupExpress() {
  app.use(cors("*"));

  app.use(bodyParser.json()); // for parsing application/json

  app.route("/").get(root);

  app.route("/api/courses").get(checkIfAuthenticated, gettAllCourses);

  app
    .route("/api/courses/:courseUrl")
    .get(checkIfAuthenticated, findCourseByUrl);

  app
    .route("/api/courses/:courseId/lessons")
    .get(checkIfAuthenticated, findLessonForCourse);

  app.route("/api/courses/:courseId").patch(checkIfAuthenticated, updateCourse);

  app.route("/api/courses").post(checkIfAuthenticated, createCourse);

  app
    .route("/api/courses/:courseId")
    .delete(checkIfAuthenticated, deleteCourseAndLessons);

  app.route("/api/users").post(checkIfAuthenticated, checkIfAdmin, createUser);

  app.route("/api/login").post(login);

  app.use(defaultErrorHandler);
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
    logger.info("Data source initialized");
    setupExpress();
    startServer();
  })
  .catch((error) => {
    logger.error("Error initializing data source", error);
    process.exit(1);
  });
