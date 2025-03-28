import * as dotenv from "dotenv";

const results = dotenv.config();

import "reflect-metadata";

import { COURSES, USERS } from "./db-data";
import { AppDataSource } from "../data-source";
import { DeepPartial } from "typeorm";
import { Course } from "./course";
import { Lesson } from "./lesson";
import { User } from "./user";
import { calculatePasswordHash } from "../utils";

async function populateDb() {
  await AppDataSource.initialize();
  console.log("Data connection initialized");

  const courses = Object.values(COURSES) as DeepPartial<Course>[];

  const courseRepository = AppDataSource.getRepository(Course);
  const lessonRepository = AppDataSource.getRepository(Lesson);

  for (let courseData of courses) {
    console.log(`Inserting course ${courseData.title}`);

    const course = courseRepository.create(courseData);

    await courseRepository.save(course);

    for (let lessonData of courseData.lessons) {
      console.log(`Inserting lesson ${lessonData.title}`);

      const lesson = lessonRepository.create(lessonData);

      lesson.course = course;

      await lessonRepository.save(lesson);
    }
  }

  const users = Object.values(USERS) as any[];

  for (let userData of users) {
    console.log(`Inserting user ${userData.email}`);
    const { email, pictureUrl, isAdmin, passwordSalt, plainTextPassword } =
      userData;

    const user = AppDataSource.getRepository(User).create({
      email,
      pictureUrl,
      isAdmin,
      passwordSalt,
      passwordHash: await calculatePasswordHash(
        plainTextPassword,
        passwordSalt
      ),
    });

    await AppDataSource.manager.save(user);
  }

  const totalCourses = await courseRepository.createQueryBuilder().getCount();
  const totalLessons = await lessonRepository.createQueryBuilder().getCount();

  console.log(
    `Database populated with ${totalCourses} courses and ${totalLessons} lessons`
  );
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
