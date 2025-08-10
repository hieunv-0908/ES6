class Student{
    id:number;
    age:number;
    email:string;
    constructor(id:number,age:number,email:string){
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let student_list:Student[] = [];

function add_student(student_list:Student[]){
    let id:number = student_list.length + 1;
    let age:number = 16;
    let email:string = "bak@gmail.com"
    let student = new Student(id,age,email);
    student_list.push(student);
}

function display_students(student_list:Student[]):void{
    student_list.forEach((student)=>console.log(`ID:${student.id},Age:${student.age},Email:${student.email}`));
}

add_student(student_list);
add_student(student_list);
add_student(student_list);
display_students(student_list);

