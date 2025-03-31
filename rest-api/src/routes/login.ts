import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../data-source";
import { calculatePasswordHash } from "../utils";

export async function login(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    logger.debug(`Called login()`);
    const { email, password } = request.body;

    if (!email) {
      throw "Could not extract email from request, aborting";
    }
    if (!password) {
      throw "Could not extract password from request, aborting";
    }

    const user = await AppDataSource.getRepository("User")
      .createQueryBuilder("users")
      .where("email = :email", { email })
      .getOne();

    if (!user) {
      const message = "Login denied";
      logger.info(`${message} - ${email}`);
      response.status(403).json({ message });
      return;
    }

    const passwordHash = await calculatePasswordHash(
      password,
      user.passwordSalt
    );

    if (passwordHash !== user.passwordHash) {
      const message = "Login denied";
      logger.info(
        `${message} - user with ${email} email entered wrong password`
      );
      response.status(403).json({ message });
      return;
    }

    logger.info(`Login granted for user with ${email} email`);

    const { pictureUrl, isAdmin } = user;

    response.status(200).json({ user: { email, pictureUrl, isAdmin } });
  } catch (error) {
    logger.error("Error in login", error);
    return next(error);
  }
}
