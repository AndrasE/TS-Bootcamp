function createCourse(title, subTitle, lessonCount) {
    console.log("Creating TS course with Title: ".concat(title, ", Subtitle: ").concat(subTitle, ", lessonCount: ").concat(lessonCount));
    return {
        title: title,
        subTitle: subTitle,
        lessonCount: lessonCount,
    };
}
var results = createCourse("TS", "Bootcamp", 20);
