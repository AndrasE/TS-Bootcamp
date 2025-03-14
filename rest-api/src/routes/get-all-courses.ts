import { Request, Response } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../data-source";

export async function gettAllCourses(request: Request, response: Response) {
  logger.info("Getting all courses");

  const courses = await AppDataSource.getRepository("Course")
    .createQueryBuilder("courses")
    .leftJoinAndSelect("courses.lessons", "LESSONS")
    .orderBy("courses.seqNo")
    .getMany();

  response.status(200).json({ courses });
}
