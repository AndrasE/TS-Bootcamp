"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteger = isInteger;
function isInteger(input) {
    return input?.match(/^\d+$/) ?? false;
}
