abstract class Animal{
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    abstract makeNoise():void;
    printName(){
        console.log(`Name:${this.name}`);
    }
}

class Cat extends Animal{
    constructor(name:string) {
        super(name);
    }
    makeNoise(): void {
        console.log(`Meow`);
    }
}

class Dog extends Animal{
    constructor(name:string) {
        super(name);
    }
    makeNoise(): void {
        console.log(`Gaauu`);
    }
}

let cat1 = new Cat("Loki");
let dog1 = new Dog("Jonh");
cat1.printName();
cat1.makeNoise();
dog1.printName();
dog1.makeNoise();