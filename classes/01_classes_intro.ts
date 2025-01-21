class Course {
  title: string;
  subtitle: string;
  creationDate: Date;

  constructor(title: string, subtitle: string, creationDate: Date) {
    this.title = title;
    this.subtitle = subtitle;
    this.creationDate = creationDate;
  }

  age() {
    const ageInMS = new Date().getTime() - this.creationDate.getTime();

    return ageInMS / 1000 / 60 / 24;
  }
}

const course = new Course("TS", "Bootcamp", new Date(2001, 1, 22));

console.log(course.age());

//symplified syntax

class Course2 {
  constructor(
    public title: string,
    public subtitle: string,
    private creationDate: Date
  ) {}
  age() {
    const ageInMS = new Date().getTime() - this.creationDate.getTime();

    return ageInMS / 1000 / 60 / 24;
  }
}

const course2 = new Course2("TS", "Bootcamp", new Date(2001, 1, 22));

console.log(course2.age());

//getter
class Course3 {
  constructor(
    private title: string,
    private subtitle: string,
    private creationDate: Date
  ) {}

  get age() {
    const ageInMS = new Date().getTime() - this.creationDate.getTime();

    return ageInMS / 1000 / 60 / 24;
  }
}

const course3 = new Course2("TS", "Bootcamp", new Date(2001, 1, 22));

console.log(course3.age);

//setter
class Course4 {
  constructor(
    private _title: string,
    private subtitle: string,
    private creationDate: Date
  ) {}

  // Setter for the title
  set title(newTitle: string) {
    if (!newTitle) {
      throw new Error("Title is required");
    } else {
      this._title = newTitle;
    }
  }

  // Getter for the age of the course
  get age() {
    const ageInMS = new Date().getTime() - this.creationDate.getTime();
    return ageInMS / 1000 / 60 / 60 / 24; // Convert ms to days
  }
}

// Usage example
const course4 = new Course4("TS", "Bootcamp", new Date(2001, 1, 22));

// Setting a new title
course4.title = "New value";

// Logging the course details and age
console.log(course4);
console.log(`Course age in days: ${course4.age}`);
