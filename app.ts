// 1. Encapsulation

// What is encapsulation and why is it important?

// Encapsulation in TypeScript is the process of hiding the implementation details of an object or class and exposing only the necessary information and methods to the outside world. This allows for greater control over the behavior and functionality of the object or class, and helps to prevent unintended interactions or changes.

// One important aspect of encapsulation is the use of private and protected class members, which can only be accessed within the class or its subclasses, respectively. This ensures that the internal state and behavior of the class is protected from outside interference, and can only be modified by the class itself.

// Another important aspect of encapsulation is the use of interfaces, which define the public methods and properties of a class without specifying their implementation details. This allows for a clear separation between the interface and the implementation, and makes it easier to change or update the implementation without affecting the rest of the codebase.

// Overall, encapsulation is important because it helps to maintain the integrity and stability of the code, and makes it easier to understand, maintain, and update over time.

// Example 1.1

class Car {
    private _make: string;
    private _model: string;
    private _year: number;

    constructor(make: string, model: string, year: number) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    public startEngine(): void {
        console.log(`Starting engine for ${this._make} ${this._model} (${this._year})`);
    }

    public getInfo(): string {
        return `${this._make} ${this._model} (${this._year})`;
    }
}

const myCar = new Car("Ford", "Mustang", 2020);

console.log(myCar.getInfo()); // "Ford Mustang (2020)"
myCar.startEngine(); // "Starting engine for Ford Mustang (2020)"

// 1.1 Explanation

// In this example, the Car class contains three private properties: _make, _model, and _year. These properties can only be accessed within the class, ensuring that their values are protected from outside interference. The class also has a constructor method that assigns values to these properties.

// The class also has two public methods, startEngine() and getInfo(), which allow outside code to interact with the class. The startEngine() method logs a message to the console indicating that the car's engine has been started, while the getInfo() method returns a string containing the car's make, model, and year.

// By encapsulating the properties and methods of the class in this way, we can ensure that the class is used in the way it was intended, and that its internal state is protected from unintended changes or interactions.






// 2. Abstraction

// What is abtraction and why is it important?

// Abstraction in TypeScript is the process of hiding the implementation details of a function or object and only exposing its necessary properties or methods to the outside world. This allows for a cleaner and more organized codebase, as well as easier maintenance and debugging.

// Abstraction is important in TypeScript because it allows for better encapsulation of code, making it more maintainable and scalable. It also makes it easier to change the implementation of a function or object without affecting other parts of the codebase. Additionally, it promotes the use of interfaces and classes, which are key concepts in object-oriented programming and are important for building large and complex applications.

// Example 2.1

class Vehicle {
    private type: string;
    private model: string;
    
    constructor(type: string, model: string) {
      this.type = type;
      this.model = model;
    }
    
    public startEngine(): void {
      console.log(`Starting engine of ${this.type} ${this.model}`);
    }
    
    public honkHorn(): void {
      console.log(`Beep beep! Honking horn of ${this.type} ${this.model}`);
    }
  }

// 2.1 Explanation

// In this example, we have a class called Vehicle which has two properties type and model that are private, that means only the class it self can access them. The class has a constructor method that sets the values of these properties. The class also has two methods: startEngine and honkHorn which can be called on any instance of the Vehicle class but they do not have access to type and model as they are private.

// The abstraction in this example is achieved by hiding the implementation details of the class's properties and only exposing the necessary methods for interacting with the class. Users of the class only need to know that it has a startEngine and honkHorn method, and do not need to know how the class is storing or manipulating its data internally.








// 3. Inheritance

// What is inheritance and why is it important?

// Inheritance in TypeScript is a way for one class to inherit properties and methods from another class, much like how objects in the real world can have properties and behaviors that are inherited from their parent objects. This allows you to create a new class that has all the characteristics of an existing class, but with the ability to add or override certain properties or methods to suit your needs.

// One of the main benefits of inheritance is that it allows you to create a hierarchical structure for your classes, where classes can be organized into a tree-like structure, with parent classes and child classes. This makes it easier to understand and manage complex systems of classes, as well as to reuse code by not having to repeat the same code across multiple classes.

// Inheritance also enables the implementation of polymorphism, the ability of objects to take on multiple forms, which enables a class to be defined as a more general type, and then specialized into more specific subtypes.

// It is also an important concept in OOP(Object Oriented Programming) where classes can interact with other classes as objects.

// Overall, Inheritance is an important concept in TypeScript that allows you to create reusable, maintainable, and organized code, and also enables powerful OOP concepts.

// 3.1 Example

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

class Student extends Person {
    studentId: number;

    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

    study() {
        console.log(`Student ${this.studentId} ${this.name} is studying.`);
    }

    // Overriding the walk method
    walk() {
        console.log(`Student ${this.studentId} ${this.name} is walking to class.`);
    }
}

const person = new Person("John Doe", 30);
person.speak(); // My name is John Doe and I am 30 years old.
person.walk(); // John Doe is walking.

const student = new Student("Jane Smith", 20, 12345);
student.speak(); // My name is Jane Smith and I am 20 years old.
student.study(); // Student 12345 Jane Smith is studying.
student.walk(); // Student 12345 Jane Smith is walking to class.

// 3.1 Explanation

// In this example, the Person class has two properties: name and age, as well as a constructor method that sets the values of these properties. It also has two methods: speak() and walk().

// The Student class extends the Person class and thus inherits its properties and methods. It also has an additional property studentId and a constructor that calls the parent constructor using the super() keyword and set the studentId property. It also has one additional method study(), and one method is overridden, walk() which is same in the parent class.

// When you create an instance of the Student class, it has all the properties and methods of the Person class, as well as its own properties and methods.







// 4. Polymorphism

// What is polymorphism and why is it important?

// In TypeScript, Polymorphism is the ability of a single function or method to operate on multiple types of data. This means that a single function or method can be used to work with different classes that have a common interface, or a set of properties and methods that they all share.

// There are two types of polymorphism: Static polymorphism and Dynamic polymorphism.

// Static polymorphism, also known as compile-time polymorphism, is when different types of classes are determined at compile-time and the correct method is called based on the type of object. This is implemented in TypeScript using function overloading, where different versions of a function are defined with the same name, but with different sets of parameters.

// Dynamic polymorphism, also known as runtime polymorphism, is when the type of class is determined at runtime, and the correct method is called based on the type of object. This is implemented in TypeScript using inheritance and method overriding, where a subclass can override the implementation of a method from its parent class.

// 4.1 Example

interface Animal {
    name: string;
    constructor(name: string);
    makeSound(): void;
    move(): void;
}

class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log(`Meow! My name is ${this.name}.`);
    }

    move() {
        console.log(`${this.name} is stalking around.`);
    }
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log(`Woof! My name is ${this.name}.`);
    }

    move() {
        console.log(`${this.name} is running around.`);
    }
}

let fluffy = new Cat("Fluffy");
let sparky = new Dog("Sparky");

fluffy.makeSound(); // Output: "Meow! My name is Fluffy."
sparky.makeSound(); // Output: "Woof! My name is Sparky."

// 4.1 Explanation

// The Cat class and Dog class both implement these methods and properties, but with different behavior. In this way, we can create multiple classes with the same interface and this is the main concept of polymorphism.

// So in this way, the Cat and Dog classes are polymorphic, meaning they both share the same interface, but they have their own unique implementations of the methods defined in the interface.











