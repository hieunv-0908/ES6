type Student = {name_std:string,age:number,email:string};
let student:Student = {
    name_std: "Hieu",
    age:20,
    email: "hieu@gmail.com"
}

function student_hello(student:Student):void{
    console.log(`Tên tôi là ${student.name_std}, tôi ${student.age} tuổi và email của tôi là ${student.email}`);
}

student_hello(student);