function saveCourse(course, callback: Function) {
    setTimeout(() => {
        callback("success");
    }, 1000)
}

saveCourse({title: "TS Bootcamp"},
    () =>
        console.log("Save was successful!"))
