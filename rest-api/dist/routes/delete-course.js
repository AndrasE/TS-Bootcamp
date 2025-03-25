"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseAndLessons = deleteCourseAndLessons;
const logger_1 = require("../logger");
const utils_1 = require("../utils");
const data_source_1 = require("../data-source");
const lesson_1 = require("../models/lesson");
const course_1 = require("../models/course");
async function deleteCourseAndLessons(request, response, next) {
    try {
        logger_1.logger.debug("Called deleteCourseAndLessons()");
        const courseId = request.params.courseId;
        if (!(0, utils_1.isInteger)(courseId)) {
            throw `Invalid courseId: ${courseId}`;
        }
        data_source_1.AppDataSource.manager.transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager
                .createQueryBuilder()
                .delete()
                .from(lesson_1.Lesson)
                .where("courseId = :courseId", { courseId })
                .execute();
            await transactionalEntityManager
                .createQueryBuilder()
                .delete()
                .from(course_1.Course)
                .where("id = :courseId", { courseId })
                .execute();
        });
        response
            .status(200)
            .json({ message: `Course ${courseId} was deleted successfully` });
    }
    catch (error) {
        logger_1.logger.error("Error calling deleteCourseAndLessons()", error);
        return next(error);
    }
}
