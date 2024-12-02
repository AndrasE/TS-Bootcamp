export const COURSE_TOTAL= 20;

export const COURSE = {
    title: "TS",
    description: "Bootcamp",
    lessonCount: 10
}

export default function printCourse(course: any) {
    console.log(`The course title is: ${course.title}`);
}