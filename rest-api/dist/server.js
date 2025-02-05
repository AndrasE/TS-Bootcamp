"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root_1 = require("./routes/root");
const app = (0, express_1.default)();
function setupExpress() {
    // http://localhost:3000/
    app.route("/").get(root_1.root);
}
function startServer() {
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}
setupExpress();
startServer();
