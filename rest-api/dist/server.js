"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root_1 = require("./routes/root");
const utils_1 = require("./utils");
const app = (0, express_1.default)();
function setupExpress() {
    app.route("/").get(root_1.root);
}
function startServer() {
    let port;
    const portArg = process.argv[2];
    if ((0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    if (!port) {
        port = 3000;
    }
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}
setupExpress();
startServer();
