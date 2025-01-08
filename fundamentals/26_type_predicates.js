var course = {
    title: "TS",
    subTitle: "Bootcamp",
    lessonCount: 20
};
if (isCourse(course)) {
    console.log(course.title, course.subTitle, course.lessonCount);
}
function isCourse(value) {
    var course = value;
    return (course === null || course === void 0 ? void 0 : course.title) != null && (course === null || course === void 0 ? void 0 : course.subTitle) != null;
}
