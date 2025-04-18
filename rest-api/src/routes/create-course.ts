import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../data-source";
import { Course } from "../models/course";

export async function createCourse(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    logger.debug("Called createCourse()");
    const data = request.body;

    if (!data) {
      throw "Missing course data";
    }
    const course = await AppDataSource.manager.transaction(
      "REPEATABLE READ",
      async (transactionalEntityManager) => {
        //just to make the code more readable below
        const repository = transactionalEntityManager.getRepository(Course);

        const result = await repository
          .createQueryBuilder("courses")
          .select("MAX(courses.seqNo)", "max")
          .getRawOne();

        const course = repository.create({
          ...data,
          seqNo: (result?.max ?? 0) + 1,
        });
        await repository.save(course);

        return course;
      }
    );
    response.status(200).json({ course });
  } catch (error) {
    logger.error(`Error calling createCourse(), ${error}`);
    return next(error);
  }
}
