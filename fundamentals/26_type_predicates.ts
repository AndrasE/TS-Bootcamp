interface Course {
    readonly title: string;
    subTitle?: string;
    lessonCount?: number;
}

const course: unknown = {
    title: "TS",
    subTitle: "Bootcamp",
    lessonCount: 20
}

if (isCourse(course)) {
    console.log(course.title, course.subTitle, course.lessonCount);
}

function isCourse(value: unknown): value is Course {

    const course = value as Course

    return course?.title != null && course?.subTitle != null
}