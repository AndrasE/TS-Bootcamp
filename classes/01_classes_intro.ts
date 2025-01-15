class Course {
    title : string;
    subtitle : string;
    creationDate : Date;

    constructor(
        title: string,
        subtitle: string,
        creationDate : Date
    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }

    age() {
      const ageInMS =  new Date().getTime() - this.creationDate.getTime();

      return ageInMS / 1000 / 60 / 24;
    }
}

const course = new Course("TS", "Bootcamp", new Date(2001,1,22))

console.log(course.age())