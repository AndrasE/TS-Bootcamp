"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gettAllCourses = gettAllCourses;
const logger_1 = require("../logger");
const data_source_1 = require("../data-source");
async function gettAllCourses(request, response) {
    logger_1.logger.info("Getting all courses");
    const courses = await data_source_1.AppDataSource.getRepository("Course")
        .createQueryBuilder("courses")
        .orderBy("courses.seqNo")
        .getMany();
    response.status(200).json({ courses });
}
