"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const course_1 = require("./models/course");
const lesson_1 = require("./models/lesson");
const user_1 = require("./models/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    ssl: true,
    entities: [course_1.Course, lesson_1.Lesson, user_1.User],
    synchronize: true,
    logging: true,
});
