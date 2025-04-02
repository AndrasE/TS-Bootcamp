"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfAdmin = checkIfAdmin;
const logger_1 = require("../logger");
function checkIfAdmin(request, response, next) {
    const user = request["user"];
    if (!user?.isAdmin) {
        logger_1.logger.error("User is not admin, access denied");
        response.sendStatus(403);
        return;
    }
    logger_1.logger.info("User is admin, access granted");
    next();
}
