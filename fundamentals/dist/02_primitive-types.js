//primitive types: number
var lessionCount = 10;
var total = lessionCount + 10;
console.log("total: ", total);
//primitive types: string
var title = "TS";
var subtitle = "TypeScript Bootcamp";
var fullTitle = title + ": " + subtitle;
console.log("full title: ", fullTitle);
var fullTitleTemplateString = "full title: ".concat(title, ": ").concat(subtitle);
console.log(fullTitleTemplateString);
//primitive types: boolean
var published = true;
if (published) {
    console.log("Yes it is published.");
}
//primitive types: objects + nested objects
var course = {
    title: "TS bootcamp",
    subtitle: "Listen, look, learn and listen",
    lessonCount: 666,
    author: {
        firstName: "Andras",
        lastName: "Nice",
    }
};
