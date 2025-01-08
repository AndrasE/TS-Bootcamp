interface Course {
    title: string;
    subtitle: string;
    lessonCount: number;
}


type OnCourseCreated = (course: Course) => void;

const createCourseRecord = (title: string, subtitle: string, lessonCount: number, callback: OnCourseCreated) => {
    console.log(`Creating course record with title: ${title}, subtitle: ${subtitle}, lessonCount: ${lessonCount}`);

const course = {
    title,
    subtitle,
    lessonCount
} as Course;

callback(course)

return course;
}