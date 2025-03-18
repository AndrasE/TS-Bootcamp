"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCourseByUrl = findCourseByUrl;
const logger_1 = require("../logger");
const data_source_1 = require("../data-source");
const lesson_1 = require("../models/lesson");
async function findCourseByUrl(request, response, next) {
    try {
        logger_1.logger.debug("Called findCourseByUrl()");
        const courseUrl = request.params.courseUrl;
        if (!courseUrl) {
            throw "Missing courseUrl parameter";
        }
        const course = await data_source_1.AppDataSource.getRepository("Course").findOneBy({
            url: courseUrl,
        });
        if (!course) {
            const message = `Could not find course with url ${courseUrl}`;
            logger_1.logger.error(message);
            response.status(404).json({ message });
            return;
        }
        const totalLessons = await data_source_1.AppDataSource.getRepository(lesson_1.Lesson)
            .createQueryBuilder("lessons")
            .where("lessons.courseId = :courseId", { courseId: course.id })
            .getCount();
        response.status(200).json({ course, totalLessons });
    }
    catch (error) {
        logger_1.logger.error("Error calling findCourseByUrl", error);
        return next(error);
    }
}
