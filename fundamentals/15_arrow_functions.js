function saveCourse(course, callback) {
    setTimeout(function () {
        callback("success");
    }, 1000);
}
saveCourse({ title: "TS Bootcamp" }, function () {
    return console.log("Save was successful!");
});
