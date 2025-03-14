"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = defaultErrorHandler;
const logger_1 = require("../logger");
function defaultErrorHandler(error, //its only filled in case of an error
request, response, next) {
    logger_1.logger.error("Error in request", error);
    if (response.headersSent) {
        logger_1.logger.error("Response headers already sent, delegating to built-in Express default error handler");
        return next(error);
    }
    response.status(500).json({
        status: "error",
        message: "Default error handling triggered, check logs for more details",
    });
}
