interface Course {
    title: string;
    subTitle: string;
    lessonCount: number;
}

type CourseRecord = [string, string, number]

const courseRecord: CourseRecord = ["TS", "Bootcamp", 20]