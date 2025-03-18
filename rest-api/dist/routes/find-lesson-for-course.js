"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLessonForCourse = findLessonForCourse;
const logger_1 = require("../logger");
const utils_1 = require("../utils");
async function findLessonForCourse(request, response, next) {
    try {
        logger_1.logger.debug("Called findlessonForCourse()");
        const courseId = request.params.courseId, query = request.query, pageNumber = query?.pageNumber ?? 0, pageSize = query?.pageSize ?? 3;
        // Page number and page size are optional parameters.
        // If we don't pass in a page number with our call to this end point,
        // we should assume that the page number is zero, meaning the first page of data.
        // We can do that by using the optional shading syntax. See above
        if (!(0, utils_1.isInteger)(courseId)) {
            throw `Invalid courseId: ${courseId}`;
        }
        if (!(0, utils_1.isInteger)(pageNumber)) {
            throw `Invalid pageNumber: ${pageNumber}`;
        }
        if (!(0, utils_1.isInteger)(pageSize)) {
            throw `Invalid pageSize: ${pageSize}`;
        }
    }
    catch (error) {
        logger_1.logger.error("Error calling findlessonForCourse()", error);
        return next(error);
    }
}
