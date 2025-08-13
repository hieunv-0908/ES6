// =======================
// Lesson 02 – Generic Function
// =======================
function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(5);       // T = number
let str = identity<string>("Hello"); // T = string
console.log("Generic Function:", num, str);

// =======================
// Lesson 03 – Generic Class
// =======================
class Box<T> {
    content: T;
    constructor(value: T) {
        this.content = value;
    }
    getContent(): T {
        return this.content;
    }
}

let numberBox = new Box<number>(123);
let stringBox = new Box<string>("Hello");
console.log("Generic Class:", numberBox.getContent(), stringBox.getContent());

// =======================
// Lesson 04 – Generic Interface
// =======================
interface Pair<T, U> {
    first: T;
    second: U;
}

let point: Pair<number, number> = { first: 10, second: 20 };
let userPair: Pair<string, number> = { first: "Alice", second: 25 };
console.log("Generic Interface:", point, userPair);

// =======================
// Lesson 05 – Constraint Generic
// =======================
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(value: T) {
    console.log("Length is:", value.length);
}

logLength("Hello");        // string có length
logLength([1, 2, 3]);      // array có length
// logLength(123);         // ❌ number không có length

// =======================
// Lesson 06 – Generic Built-in
// =======================

// Array<T>
let numbers: Array<number> = [1, 2, 3];

// Promise<T>
function getData(): Promise<string> {
    return Promise.resolve("Hello from Promise");
}

// Partial<T>
interface User {
    name: string;
    age: number;
}
let partialUser: Partial<User> = { name: "Alice" };

// Readonly<T>
let readonlyUser: Readonly<User> = { name: "Bob", age: 30 };
// readonlyUser.age = 31; // ❌ Không thể gán lại

console.log("Generic Built-in:", numbers, partialUser, readonlyUser);

getData().then(data => console.log("Promise Data:", data));
