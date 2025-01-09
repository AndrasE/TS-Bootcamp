"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COURSE = exports.COURSE_TOTAL = void 0;
exports.default = printCourse;
exports.COURSE_TOTAL = 20;
exports.COURSE = {
    title: "TS",
    description: "Bootcamp",
    lessonCount: 10
};
function printCourse(course) {
    console.log("The course title is: ".concat(course.title));
}
