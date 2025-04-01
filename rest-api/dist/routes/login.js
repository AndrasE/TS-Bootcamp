"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const logger_1 = require("../logger");
const data_source_1 = require("../data-source");
const utils_1 = require("../utils");
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
async function login(request, response, next) {
    try {
        logger_1.logger.debug(`Called login()`);
        const { email, password } = request.body;
        if (!email) {
            throw "Could not extract email from request, aborting";
        }
        if (!password) {
            throw "Could not extract password from request, aborting";
        }
        const user = await data_source_1.AppDataSource.getRepository("User")
            .createQueryBuilder("users")
            .where("email = :email", { email })
            .getOne();
        if (!user) {
            const message = "Login denied";
            logger_1.logger.info(`${message} - ${email}`);
            response.status(403).json({ message });
            return;
        }
        const passwordHash = await (0, utils_1.calculatePasswordHash)(password, user.passwordSalt);
        if (passwordHash !== user.passwordHash) {
            const message = "Login denied";
            logger_1.logger.info(`${message} - user with ${email} email entered wrong password`);
            response.status(403).json({ message });
            return;
        }
        logger_1.logger.info(`Login granted for user with ${email} email`);
        const { pictureUrl, isAdmin } = user;
        const authJwt = {
            userId: user.id,
            email,
            isAdmin,
        };
        const authJwtToken = await jwt.sign(authJwt, JWT_SECRET);
        response
            .status(200)
            .json({ user: { email, pictureUrl, isAdmin }, authJwtToken });
    }
    catch (error) {
        logger_1.logger.error("Error in login", error);
        return next(error);
    }
}
