"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCourseByUrl = findCourseByUrl;
const logger_1 = require("../logger");
async function findCourseByUrl(request, response, next) {
    logger_1.logger.info("Getting all courses");
    const courseUrl = request.params.courseUrl;
    if (!courseUrl) {
        throw "Missing courseUrl parameter";
    }
    try {
        logger_1.logger.debug("Called findCourseByUrl()");
    }
    catch (error) {
        logger_1.logger.error("Error calling findCourseByUrl", error);
        return next(error);
    }
}
