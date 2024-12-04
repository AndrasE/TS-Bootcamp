interface Course {
    title: string;
    lessonCount: number;
}

const course1: Course = {
    title: "TS 1",
    lessonCount: 20
}

const course2: Course = {
    title: "TS 2",
    lessonCount: 25
}
debugger;

function printCourse(message: string, ...courses: Course[]) {

    console.log(message);

    for (let course of courses) {
        console.log(course.title);
    }
}

debugger;
//printCourse("welcome to courses:", [course1, course2])
printCourse("welcome to courses:", course1, course2)