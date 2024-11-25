var _a, _b, _c;
var title;
console.log("title " + title);
if (!title) {
    console.log("The value of title is not known yet.");
}
var subTitle = null;
console.log("title " + subTitle);
if (!subTitle) {
    console.log("The value of subTitle is not known yet.");
}
//optional chaining
var course = null;
if ((_a = course === null || course === void 0 ? void 0 : course.textFields) === null || _a === void 0 ? void 0 : _a.title) {
    console.log("The title is ".concat(course.textFields.title));
}
//null coalescing operator
var course2 = null;
var title2 = (_c = (_b = course === null || course === void 0 ? void 0 : course.textFields) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : "No title available";
console.log(title2);
