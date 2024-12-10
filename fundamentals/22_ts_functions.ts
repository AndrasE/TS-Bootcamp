interface Course {
    title: string;
    subTitle: string;
    lessonCount: number;
}

function createCourse(title: string, subTitle: string, lessonCount: number) : Course  {
    console.log(`Creating TS course with Title: ${title}, Subtitle: ${subTitle}, lessonCount: ${lessonCount}`);

    return {
        title,
        subTitle,
        lessonCount,
    } as Course;
}

const results = createCourse("TS", "Bootcamp", 20)