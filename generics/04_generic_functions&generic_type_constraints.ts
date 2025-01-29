interface Course {
    title: string;
    subtitle: string;
    lessonCount: number;
}

interface Lesson {
    title: string;
    seqNum: number;
}

function freeze<T extends object>(input: T): Readonly<T>{
return Object.freeze(input)
}

const frozenCourse = freeze<Course> ({
    title: "new title",
    subtitle: "new subtitle",
    lessonCount: 321,
})

const frozenLesson = freeze<Lesson> ({
    title: "new title",
    seqNum: 43
})

// freeze(true)

