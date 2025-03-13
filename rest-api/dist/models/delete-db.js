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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const results = dotenv.config();
require("reflect-metadata");
const data_source_1 = require("../data-source");
const lesson_1 = require("./lesson");
const course_1 = require("./course");
async function deleteDb() {
    await data_source_1.AppDataSource.initialize();
    console.log("Data connection initialized");
    console.log("Deleting lessons table");
    await data_source_1.AppDataSource.getRepository(lesson_1.Lesson).delete({});
    console.log("Deleting courses table");
    await data_source_1.AppDataSource.getRepository(course_1.Course).delete({});
    console.log("Database tables deleted, closing connection");
}
deleteDb()
    .then(() => {
    console.log("Database deleted");
    process.exit(0);
})
    .catch((error) => {
    console.log("Error deleting database", error);
    process.exit(1);
});
