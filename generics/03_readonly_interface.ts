interface Course {
    title: string;
    subtitle: string;
    lessonCount: number;
}

function freezeCourse(course: Course) : Readonly<Course> {
    return Object.freeze(course);
}

const frozen = freezeCourse({
    title: "TS",
    subtitle: "Bootcamp",
    lessonCount: 1234,
})

frozen.title = "New value";