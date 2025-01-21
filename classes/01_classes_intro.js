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
//symplified syntax
var Course2 = /** @class */ (function () {
    function Course2(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Course2.prototype.age = function () {
        var ageInMS = new Date().getTime() - this.creationDate.getTime();
        return ageInMS / 1000 / 60 / 24;
    };
    return Course2;
}());
var course2 = new Course2("TS", "Bootcamp", new Date(2001, 1, 22));
console.log(course2.age());
//getter
var Course3 = /** @class */ (function () {
    function Course3(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Object.defineProperty(Course3.prototype, "age", {
        get: function () {
            var ageInMS = new Date().getTime() - this.creationDate.getTime();
            return ageInMS / 1000 / 60 / 24;
        },
        enumerable: false,
        configurable: true
    });
    return Course3;
}());
var course3 = new Course2("TS", "Bootcamp", new Date(2001, 1, 22));
console.log(course3.age);
//setter
var Course4 = /** @class */ (function () {
    function Course4(_title, subtitle, creationDate) {
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Object.defineProperty(Course4.prototype, "title", {
        // Setter for the title
        set: function (newTitle) {
            if (!newTitle) {
                throw new Error("Title is required");
            }
            else {
                this._title = newTitle;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course4.prototype, "age", {
        // Getter for the age of the course
        get: function () {
            var ageInMS = new Date().getTime() - this.creationDate.getTime();
            return ageInMS / 1000 / 60 / 60 / 24; // Convert ms to days
        },
        enumerable: false,
        configurable: true
    });
    return Course4;
}());
// Usage example
var course4 = new Course4("TS", "Bootcamp", new Date(2001, 1, 22));
// Setting a new title
course4.title = "New value";
// Logging the course details and age
console.log(course4);
console.log("Course age in days: ".concat(course4.age));
