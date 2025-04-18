//primitive types: number
const lessionCount:number = 10;

const total = lessionCount + 10;

console.log("total: ", total);



//primitive types: string
const title = "TS";

const subtitle = "TypeScript Bootcamp";

const fullTitle = title + ": " + subtitle;

console.log("full title: ", fullTitle);

const fullTitleTemplateString = `full title: ${title}: ${subtitle}`;

console.log(fullTitleTemplateString)



//primitive types: boolean
const published = true;

if (published) {
    console.log("Yes it is published.");
}

//primitive types: objects + nested objects
const course = {
    title: "TS bootcamp",
    subtitle: "Listen, look, learn and listen",
    lessonCount: 666,
    author: {
        firstName: "Andras",
        lastName: "Nice",
    }
}