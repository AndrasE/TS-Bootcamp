let title:string;

console.log("title " + title);

if (!title) {
    console.log("The value of title is not known yet.")
}

let subTitle:string = null;

console.log("title " + subTitle);

if (!subTitle) {
    console.log("The value of subTitle is not known yet.")
}

//optional chaining
let course = null

if (course?.textFields?.title) {
    console.log(`The title is ${course.textFields.title}`);
}

//null coalescing operator

let course2 = null

const title2 = course?.textFields?.title ?? "No title available";

console.log(title2);