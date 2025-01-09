var createCourseRecord = function (title, subtitle, lessonCount, callback) {
    console.log("Creating course record with title: ".concat(title, ", subtitle: ").concat(subtitle, ", lessonCount: ").concat(lessonCount));
    var course = {
        title: title,
        subtitle: subtitle,
        lessonCount: lessonCount
    };
    callback(course);
    return course;
};
