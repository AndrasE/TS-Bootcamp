"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = createCourse;
const logger_1 = require("../logger");
const data_source_1 = require("../data-source");
const course_1 = require("../models/course");
async function createCourse(request, response, next) {
    try {
        logger_1.logger.debug("Called createCourse()");
        const data = request.body;
        if (!data) {
            throw "Missing course data";
        }
        await data_source_1.AppDataSource.manager.transaction("REPEATABLE READ", async (transactionalEntityManager) => {
            //just to make the code more readable
            const repository = transactionalEntityManager.getRepository(course_1.Course);
            const result = await repository
                .createQueryBuilder("courses")
                .select("MAX(courses.seqNo)", "max")
                .getRawOne();
            const course = repository.create({
                ...data,
                seqNo: (result?.max ?? 0) + 1,
            });
            await repository.save(course);
        });
    }
    catch (error) {
        logger_1.logger.error(`Error calling createCourse(), ${error}`);
        return next(error);
    }
}
