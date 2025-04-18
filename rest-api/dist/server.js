"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const results = dotenv.config();
if (results.error) {
    console.log("Error loading .env file");
    process.exit(1);
    ``;
}
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const root_1 = require("./routes/root");
const utils_1 = require("./utils");
const logger_1 = require("./logger");
const data_source_1 = require("./data-source");
const get_all_courses_1 = require("./routes/get-all-courses");
const default_error_handling_1 = require("./middlewares/default-error-handling");
const find_course_by_url_1 = require("./routes/find-course-by-url");
const find_lesson_for_course_1 = require("./routes/find-lesson-for-course");
const update_course_1 = require("./routes/update-course");
const create_course_1 = require("./routes/create-course");
const delete_course_1 = require("./routes/delete-course");
const create_user_1 = require("./routes/create-user");
const login_1 = require("./routes/login");
const authentication_middleware_1 = require("./middlewares/authentication-middleware");
const admin_only_middleware_1 = require("./middlewares/admin-only-middleware");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
function setupExpress() {
    app.use(cors("*"));
    app.use(bodyParser.json()); // for parsing application/json
    app.route("/").get(root_1.root);
    app.route("/api/courses").get(authentication_middleware_1.checkIfAuthenticated, get_all_courses_1.gettAllCourses);
    app
        .route("/api/courses/:courseUrl")
        .get(authentication_middleware_1.checkIfAuthenticated, find_course_by_url_1.findCourseByUrl);
    app
        .route("/api/courses/:courseId/lessons")
        .get(authentication_middleware_1.checkIfAuthenticated, find_lesson_for_course_1.findLessonForCourse);
    app.route("/api/courses/:courseId").patch(authentication_middleware_1.checkIfAuthenticated, update_course_1.updateCourse);
    app.route("/api/courses").post(authentication_middleware_1.checkIfAuthenticated, create_course_1.createCourse);
    app
        .route("/api/courses/:courseId")
        .delete(authentication_middleware_1.checkIfAuthenticated, delete_course_1.deleteCourseAndLessons);
    app.route("/api/users").post(authentication_middleware_1.checkIfAuthenticated, admin_only_middleware_1.checkIfAdmin, create_user_1.createUser);
    app.route("/api/login").post(login_1.login);
    app.use(default_error_handling_1.defaultErrorHandler);
}
function startServer() {
    let port;
    const portEnv = process.env.PORT;
    const portArg = process.argv[2];
    if ((0, utils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    if (!port && (0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    if (!port) {
        port = 3000;
    }
    app.listen(port, () => {
        logger_1.logger.info(`Server started on port ${port}`);
    });
}
data_source_1.AppDataSource.initialize()
    .then(() => {
    logger_1.logger.info("Data source initialized");
    setupExpress();
    startServer();
})
    .catch((error) => {
    logger_1.logger.error("Error initializing data source", error);
    process.exit(1);
});
