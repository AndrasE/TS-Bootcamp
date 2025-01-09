var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var course = {
    title: "TS",
    subtitle: "Bootcamp",
    stats: {
        lessonCount: 12,
    }
};
var newCourse = {
    title: course.title,
    subtitle: course.subtitle,
    stats: {
        course: course.stats.lessonCount,
        //deep copy if referencing course.stats it would be a shallow copy
    }
};
var spreadNewCourse = __assign({}, course);
console.log(newCourse);
course.stats.lessonCount = 100;
console.log(newCourse);
console.log(spreadNewCourse);
