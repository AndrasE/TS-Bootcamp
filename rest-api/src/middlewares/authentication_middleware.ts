import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

export function checkIfAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authJwtToken = request.headers.authorization;

  if (!authJwtToken) {
    logger.info("The JWT token not present, access denied");
    response.sendStatus(403);
    return;
  }

  checkJwtValidity(authJwtToken)
    .then((user) => {
      logger.info(`Authentication JWT sucessfully decoded:`, user);
      request["user"] = user;
      next();
    })
    .catch((error) => {
      logger.error("Error while checking JWT token", error);
      response.sendStatus(403);
    });
}

async function checkJwtValidity(authJwtToken: string) {
  const user = await jwt.verify(authJwtToken, JWT_SECRET);

  logger.info("Found user details in JWT token:", user);
  return user;
}
