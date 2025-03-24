"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourse = updateCourse;
const logger_1 = require("../logger");
const utils_1 = require("../utils");
const data_source_1 = require("../data-source");
const course_1 = require("../models/course");
async function updateCourse(request, response, next) {
    try {
        logger_1.logger.debug("Called updateCourse()");
        const courseId = request.params.courseId, changes = request.body;
        if (!(0, utils_1.isInteger)(courseId)) {
            throw `Invalid courseId: ${courseId}`;
        }
        await data_source_1.AppDataSource.createQueryBuilder()
            .update(course_1.Course)
            .set(changes)
            .where("id = :courseId", { courseId })
            .execute();
        response
            .status(200)
            .json({ message: `Course ${courseId} was updated successfully` });
    }
    catch (error) {
        logger_1.logger.error("Error calling updateCourse()", error);
        return next(error);
    }
}
