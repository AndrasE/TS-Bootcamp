var Course = /** @class */ (function () {
    function Course(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Course.prototype.age = function () {
        var ageInMS = new Date().getTime() - this.creationDate.getTime();
        return ageInMS / 1000 / 60 / 24;
    };
    return Course;
}());
var course = new Course("TS", "Bootcamp", new Date(2001, 1, 22));
console.log(course.age());
