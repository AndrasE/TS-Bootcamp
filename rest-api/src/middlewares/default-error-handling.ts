import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";

export function defaultErrorHandler(
  error, //its only filled in case of an error
  request: Request,
  response: Response,
  next: NextFunction
) {
  logger.error("Error in request", error);

  if (response.headersSent) {
    logger.error(
      "Response headers already sent, delegating to built-in Express default error handler"
    );
    return next(error);
  }

  response.status(500).json({
    status: "error",
    message: "Default error handling triggered, check logs for more details",
  });
}
