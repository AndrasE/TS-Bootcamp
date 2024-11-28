interface  Course {
    readonly title: string;
    description: string;
    lessonsCount: number;
    started?: boolean;
}

let course: Course = {
    title: "TS studies",
    description: "Beginner to pro",
    lessonsCount: 12,
    started: true,
}

let otherCourse: Course = {
    title: "Other Ts studies",
    description: "Other pro stuff",
    lessonsCount: 11
}