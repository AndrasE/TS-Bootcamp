interface Course {
    title: string;
    subtitle: string;
    lessonCount: number;
}

let course: Course = {
    title: "TS",
    subtitle: "Bootcamp",
    lessonCount: 12,
}

printCourse(course);

function printCourse(course: Course) {

    const {title, subtitle, lessonCount} = course;

    console.log(`title: ${title}, subtitle: ${subtitle} lessonCount: ${lessonCount}`);
}