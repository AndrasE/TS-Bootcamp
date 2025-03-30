import { Response, Request, NextFunction } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../data-source";
import { User } from "../models/user";
import { log } from "winston";
import { calculatePasswordHash } from "../utils";

const crypto = require("crypto");

export async function createUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    logger.debug(`Called createUser()`);

    const { email, password, pictureUrl, isAdmin } = request.body;

    if (!email) {
      throw "Could not extract email from request, aborting";
    }
    if (!password) {
      throw "Could not extract password from request, aborting";
    }

    const repository = AppDataSource.getRepository(User);

    const user = await repository
      .createQueryBuilder("users")
      .where("email = :email", { email })
      .getOne();

    if (user) {
      const message = `User with email ${email} already exists`;
      logger.error(message);
      response.status(500).json({ message });
      return;
    }

    const passwordSalt = crypto.randomBytes(64).toString("hex");
    const passwordHash = await calculatePasswordHash(password, passwordSalt);

    const newUser = repository.create({
      email,
      pictureUrl,
      isAdmin,
      passwordSalt,
      passwordHash,
    });

    AppDataSource.manager.save(newUser).then(() => {
      logger.debug(`User ${email} created`);
      response.status(200).json({ message: "User created" });
    });
  } catch (error) {
    logger.error("Error creating user", error);
    return next(error);
  }
}
