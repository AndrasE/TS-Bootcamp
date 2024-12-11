interface Course {
    title: string;
    subTitle: string;
    lessonCount: number;
}

type CreateCourse = (title: string, subTitle: string, lessonCount: number) => Course;

type OnCourseCreated = (course: Course) => void;

const createCourse = (title: string, subTitle: string, lessonCount: number, callback: OnCourseCreated) => {

    console.log(`Creating TS course with Title: ${title}, Subtitle: ${subTitle}, lessonCount: ${lessonCount}`);

    const course = {
        title,
        subTitle,
        lessonCount,
    }

    callback(course)

    return course;
}


