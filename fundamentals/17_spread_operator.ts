interface Course {
    title: string;
    subtitle: string;
    stats: {
        lessonCount: number;
    }
}

let course: Course = {
    title: "TS",
    subtitle: "Bootcamp",
    stats: {
        lessonCount: 12,
    }
}

const newCourse = {
    title: course.title,
    subtitle: course.subtitle,
    stats: {
        course: course.stats.lessonCount,
        //deep copy if referencing course.stats it would be a shallow copy
    }
}

const spreadNewCourse = {...course}

console.log(newCourse)

course.stats.lessonCount = 100

console.log(newCourse)

console.log(spreadNewCourse)