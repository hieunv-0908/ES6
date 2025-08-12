class Person{
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    displayInfo(){
        console.log(`Name:${this.name}`);
    }
}

class Student extends Person{
    id:string;
    constructor(id:string,name:string) {
        super(name);
        this.id = id;
    }
    displayInfo(){
        console.log(`Name:${this.name} ID:${this.id}`);
    }
}

class Teacher extends Person{
    subject:string;
    constructor(name:string,subject:string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(){
        console.log(`Name:${this.name},Subject:${this.subject}`);
    }
}

let st1 = new Student("ST001","Nguyễn Văn A");
let tc1= new Teacher("Math","Nguyễn Thị B");

st1.displayInfo();
tc1.displayInfo();