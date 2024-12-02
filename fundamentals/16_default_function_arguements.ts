function printCourse(title: string, subtitle: string, lessonCount: number = 0 ) {
    console.log(`Title: ${title}, SubTitle ${subtitle}, Lesson count: ${lessonCount}`)
}

printCourse("TS", "Bootcamp", 10)

printCourse("TS", "Bootcamp")