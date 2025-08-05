class Student{
    static id = 1;
    constructor(id,name,age,scores){
        this.id = `B24DTCN${id++}`;
        this.name = name;
        this.age = age;
        this.scores = scores;
    };
    sayScores(){
        console.log(`Tôi được ${this.scores} điểm.`);   
    }
}

const getStudentById = (studentList, id)=>{
    return studentList.find(a=>a.id = id);
}
const getTopStudents = (studentList)=>{
    return studentList.reduce((acc,curr_val)=>{
        return acc < curr_val.scores ? acc = curr_val.scores : acc = acc;
    },studentList[0].scores);
}

const student_list = [];
const st1 = new Student("Hieu",18,10);
const st2 = new Student("Vuong",18,8);
const st3 = new Student("Anh",18,10);
const st4 = new Student("Dat",18,9);
const st5 = new Student("Trong",18,5);
student_list.push(st1,st2,st3,st4,st5);

// let id_search = prompt("Nhap id muon tim:");

console.log(getTopStudents(student_list));


