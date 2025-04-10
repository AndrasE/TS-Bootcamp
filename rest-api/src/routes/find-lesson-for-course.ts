import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";
import { isInteger } from "../utils";
import { AppDataSource } from "../data-source";
import { Lesson } from "../models/lesson";

export async function findLessonForCourse(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    logger.debug("Called findlessonForCourse()");

    const courseId = request.params.courseId,
      query = request.query as any,
      pageNumber = query?.pageNumber ?? "0",
      pageSize = query?.pageSize ?? "3";
    // Page number and page size are optional parameters.
    // If we don't pass in a page number with our call to this end point,
    // we should assume that the page number is zero, meaning the first page of data.
    // We can do that by using the optional shading syntax. See above

    if (!isInteger(courseId)) {
      throw `Invalid courseId: ${courseId}`;
    }

    if (!isInteger(pageNumber)) {
      throw `Invalid pageNumber: ${pageNumber}`;
    }

    if (!isInteger(pageSize)) {
      throw `Invalid pageSize: ${pageSize}`;
    }

    const lessons = await AppDataSource.getRepository(Lesson)
      .createQueryBuilder("lessons")
      .where("lessons.courseId = :courseId", { courseId })
      .orderBy("lessons.seqNo")
      .skip(pageNumber * pageSize)
      .take(pageSize)
      .getMany();

    response.status(200).json({ lessons });
  } catch (error) {
    logger.error("Error calling findlessonForCourse()", error);
    return next(error);
  }
}
