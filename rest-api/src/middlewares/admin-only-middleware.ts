import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";

export function checkIfAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const user = request["user"];

  if (!user?.isAdmin) {
    logger.error("User is not admin, access denied");
    response.sendStatus(403);
    return;
  }

  logger.info("User is admin, access granted");
  next();
}
