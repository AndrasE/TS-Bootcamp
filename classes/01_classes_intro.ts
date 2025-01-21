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
