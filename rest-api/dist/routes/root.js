"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = root;
function root(request, response) {
    response.status(200).send("<h1>Server is running via Express!</h1>");
}
