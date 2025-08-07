type Subject = {
    subject_name:string,
    score:number | string,
}

type Student = {
    name:string,
    age:number,
    subject:Subject[],
}

let students: Student[] = [];
function add_student(student: Student): void{
    students.push(student);
}

function update_student(name: string, new_name:string,new_age:String):void {
   let student_search = students.find((student)=> student.name === name);
}