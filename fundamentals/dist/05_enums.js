var courseType;
(function (courseType) {
    courseType[courseType["FREE"] = 5] = "FREE";
    courseType[courseType["PREMIUM"] = 4123] = "PREMIUM";
    courseType["PRIVATE"] = "hello";
})(courseType || (courseType = {}));
var course = {
    title: 'Ts Course',
    type: courseType.PREMIUM,
};
console.log(course);
