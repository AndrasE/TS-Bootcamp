const course: Course = {
    title: "TS",
    subtitle: "Bootcamp",
    lessonCount: 456
}

type CourseKeys = keyof Course;

export function extractProperty<T, K extends keyof T>(data: T, property: K)   {
    return data[property]
}

const val = extractProperty(course, "title")


///other example///

interface User {
    name: string;
    age: number;
}

type UserKeys = keyof User; // UserKeys is now "name" | "age"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: User = { name: "Alice", age: 30 };

const userName = getProperty(user, "name"); // userName is of type string
const userAge = getProperty(user, "age"); // userAge is of type number

// This will not compile:
// const invalid = getProperty(user, "address"); // Property 'address' does not exist on type 'User'