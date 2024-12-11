var createCourse = function (title, subTitle, lessonCount, callback) {
    console.log("Creating TS course with Title: ".concat(title, ", Subtitle: ").concat(subTitle, ", lessonCount: ").concat(lessonCount));
    var course = {
        title: title,
        subTitle: subTitle,
        lessonCount: lessonCount,
    };
    callback(course);
    return course;
};
