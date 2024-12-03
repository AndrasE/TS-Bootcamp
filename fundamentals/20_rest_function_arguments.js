var course1 = {
    title: "TS 1",
    lessonCount: 20
};
var course2 = {
    title: "TS 2",
    lessonCount: 25
};
function printCourse(message) {
    var courses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        courses[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var course = courses_1[_a];
        console.log(course.title);
    }
}
//printCourse("welcome to courses:", [course1, course2])
printCourse("welcome to courses:", course1, course2);
