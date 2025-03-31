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

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

function setupExpress() {
  app.use(cors("*"));

  app.use(bodyParser.json()); // for parsing application/json

  app.route("/").get(root);

  app.route("/api/courses").get(gettAllCourses);

  app.route("/api/courses/:courseUrl").get(findCourseByUrl);

  app.route("/api/courses/:courseId/lessons").get(findLessonForCourse);

  app.route("/api/courses/:courseId").patch(updateCourse);

  app.route("/api/courses").post(createCourse);

  app.route("/api/courses/:courseId").delete(deleteCourseAndLessons);

  app.route("/api/users").post(createUser);

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
