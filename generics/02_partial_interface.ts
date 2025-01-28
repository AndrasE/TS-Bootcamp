export interface  Course {
    title: string;
    subtitle: string;
    lessonsCount: number;
}

export function updateCourse(courseId: string, update: Partial<Course>) {

}

updateCourse("1", {
    title: "New title",
    }
)

updateCourse("1", {
        subtitle: "New subtitle",
    }
)