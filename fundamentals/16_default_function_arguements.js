function printCourse(title, subtitle, lessonCount) {
    if (lessonCount === void 0) { lessonCount = 0; }
    console.log("Title: ".concat(title, ", SubTitle ").concat(subtitle, ", Lesson count: ").concat(lessonCount));
}
printCourse("TS", "Bootcamp", 10);
printCourse("TS", "Bootcamp");
