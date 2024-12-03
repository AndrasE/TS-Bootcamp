var course = {
    title: "TS",
    subtitle: "Bootcamp",
    lessonCount: 12,
};
printCourse(course);
function printCourse(course) {
    var title = course.title, subtitle = course.subtitle, lessonCount = course.lessonCount;
    console.log("title: ".concat(title, ", subtitle: ").concat(subtitle, " lessonCount: ").concat(lessonCount));
}
