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
const app = (0, express_1.default)();
function setupExpress() {
    app.route("/").get(root_1.root);
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
