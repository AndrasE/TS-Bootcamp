import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../data-source";

export async function gettAllCourses(
  request: Request,
  response: Response,
  next: NextFunction
) {
  logger.info("Getting all courses");

  try {
    const courses = await AppDataSource.getRepository("Course")
      .createQueryBuilder("courses")
      .orderBy("courses.seqNo")
      .getMany();

    response.status(200).json({ courses });
  } catch (error) {
    logger.error("Error getting all courses", error);
    return next(error);
  }
}
