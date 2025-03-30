"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
const logger_1 = require("../logger");
const data_source_1 = require("../data-source");
const user_1 = require("../models/user");
const utils_1 = require("../utils");
const crypto = require("crypto");
async function createUser(request, response, next) {
    try {
        logger_1.logger.debug(`Called createUser()`);
        const { email, password, pictureUrl, isAdmin } = request.body;
        if (!email) {
            throw "Could not extract email from request, aborting";
        }
        if (!password) {
            throw "Could not extract password from request, aborting";
        }
        const repository = data_source_1.AppDataSource.getRepository(user_1.User);
        const user = await repository
            .createQueryBuilder("users")
            .where("email = :email", { email })
            .getOne();
        if (user) {
            const message = `User with email ${email} already exists`;
            logger_1.logger.error(message);
            response.status(500).json({ message });
            return;
        }
        const passwordSalt = crypto.randomBytes(64).toString("hex");
        const passwordHash = await (0, utils_1.calculatePasswordHash)(password, passwordSalt);
        const newUser = repository.create({
            email,
            pictureUrl,
            isAdmin,
            passwordSalt,
            passwordHash,
        });
        data_source_1.AppDataSource.manager.save(newUser).then(() => {
            logger_1.logger.debug(`User ${email} created`);
            response.status(200).json({ message: "User created" });
        });
    }
    catch (error) {
        logger_1.logger.error("Error creating user", error);
        return next(error);
    }
}
