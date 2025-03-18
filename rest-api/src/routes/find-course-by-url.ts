import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";

export async function findCourseByUrl(
  request: Request,
  response: Response,
  next: NextFunction
) {
  logger.info("Getting all courses");

  const courseUrl = request.params.courseUrl;

  if (!courseUrl) {
    throw "Missing courseUrl parameter";
  }

  try {
    logger.debug("Called findCourseByUrl()");
  } catch (error) {
    logger.error("Error calling findCourseByUrl", error);
    return next(error);
  }
}
