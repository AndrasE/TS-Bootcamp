"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfAuthenticated = checkIfAuthenticated;
const logger_1 = require("../logger");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
function checkIfAuthenticated(request, response, next) {
    const authJwtToken = request.headers.authorization;
    if (!authJwtToken) {
        logger_1.logger.info("The JWT token not present, access denied");
        response.sendStatus(403);
        return;
    }
    checkJwtValidity(authJwtToken)
        .then((user) => {
        logger_1.logger.info(`Authentication JWT sucessfully decoded:`, user);
        request["user"] = user;
        next();
    })
        .catch((error) => {
        logger_1.logger.error("Error while checking JWT token", error);
        response.sendStatus(403);
    });
}
async function checkJwtValidity(authJwtToken) {
    const user = await jwt.verify(authJwtToken, JWT_SECRET);
    logger_1.logger.info("Found user details in JWT token:", user);
    return user;
}
