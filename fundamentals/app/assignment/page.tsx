// Basic Types
const aString: string = "Sup, Frank";
const aNumber: number = 293;
const aBoolean: boolean = true;
const normalArray: number[] = [1, 2, 3];
const genericArray: Array<string> = ["a", "b", "c"];

console.log(`string: ${aString}, number: ${aNumber}, boolean: ${aBoolean}, normal array: ${normalArray}, generic array: ${genericArray}`);

// Interfaces
interface Person {
    name: string;
    age: number;
    email: string | undefined;
}

const Frank: Person = {
    name: "Frank",
    age: 30,
    email: "frank@example.com"
};

console.log(`Person: ${Frank.name}, Age: ${Frank.age}, Email: ${Frank.email}`);

// Classes
class Employee implements Person {
    name: string;
    age: number;
    email: string | undefined;

    constructor(name: string, age: number, email?: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    displayInfo(): void {
        console.log(`Employee Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}

const newEmployee = new Employee("Chris", 31, "chris@example.com");
newEmployee.displayInfo();

// Generics
class Box<T> {
    value: T;

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }
}

// Instantiate a Box with a number
const boxWithNumber = new Box<number>(293);
console.log(`Box value: ${boxWithNumber.getValue()}`);

// Instantiate a Box with a string
const boxWithString = new Box<string>("Hello, Frank!");
console.log(`Box value: ${boxWithString.getValue()}`);
