"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const typeorm_1 = require("typeorm");
let Course = class Course {
    id;
    seqNo;
    title;
    longDescription;
    category;
    createdDate;
    lastModifiedDate;
};
exports.Course = Course;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Course.prototype, "seqNo", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Course.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Course.prototype, "longDescription", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Course.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)()
], Course.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)()
], Course.prototype, "lastModifiedDate", void 0);
exports.Course = Course = __decorate([
    (0, typeorm_1.Entity)({
        name: "COURSES",
    })
], Course);
