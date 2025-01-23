// Define an interface
interface Animal {
  name: string;
  makeSound(): void; // A method that the class must implement
}

// Implement the interface in a class
class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Implement the makeSound method
  makeSound(): void {
    console.log(`${this.name} says Woof!`);
  }
}

// Implement another class
class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Implement the makeSound method
  makeSound(): void {
    console.log(`${this.name} says Meow!`);
  }
}

// Instantiate the classes
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound(); // Buddy says Woof!
cat.makeSound(); // Whiskers says Meow!
