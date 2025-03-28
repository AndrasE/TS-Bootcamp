"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const results = dotenv.config();
require("reflect-metadata");
const db_data_1 = require("./db-data");
const data_source_1 = require("../data-source");
const course_1 = require("./course");
const lesson_1 = require("./lesson");
const user_1 = require("./user");
const utils_1 = require("../utils");
async function populateDb() {
    await data_source_1.AppDataSource.initialize();
    console.log("Data connection initialized");
    const courses = Object.values(db_data_1.COURSES);
    const courseRepository = data_source_1.AppDataSource.getRepository(course_1.Course);
    const lessonRepository = data_source_1.AppDataSource.getRepository(lesson_1.Lesson);
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
    const users = Object.values(db_data_1.USERS);
    for (let userData of users) {
        console.log(`Inserting user ${userData.email}`);
        const { email, pictureUrl, isAdmin, passwordSalt, plainTextPassword } = userData;
        const user = data_source_1.AppDataSource.getRepository(user_1.User).create({
            email,
            pictureUrl,
            isAdmin,
            passwordSalt,
            passwordHash: await (0, utils_1.calculatePasswordHash)(plainTextPassword, passwordSalt),
        });
        await data_source_1.AppDataSource.manager.save(user);
    }
    const totalCourses = await courseRepository.createQueryBuilder().getCount();
    const totalLessons = await lessonRepository.createQueryBuilder().getCount();
    console.log(`Database populated with ${totalCourses} courses and ${totalLessons} lessons`);
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
