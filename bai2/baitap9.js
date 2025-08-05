const Student ={
    name: "Dev",
    age:20,
    list:[
        {subject: "Math",score:9},
        {subject: "English",score:7.5},
        {subject: "Physics",score:6},
        {subject: "Literature",score:8.5},
    ]
}

const getStudentSummary = student=>{
    student.list.sort((a,b)=>a.score-b.score)
    let dtb = student.list.reduce((acc,curr)=>acc += curr.score,0)/student.list.length;
    let dln = Math.max(...student.list.map(element => element.score))
    let dnn = Math.min(...student.list.map(element => element.score))
    console.log(`
        Dev is ${student.name} years old.
        Avarge score: ${dtb} -> ${dtb >= 8.5 ? "Học sinh giỏi" : dtb >= 7 ? "Học sinh khá" : "Học sinh yếu"}
        Best subject: %cMath%c! (${dln})
        Weakest subject: %cMath%c! (${dnn})`,
        "color:blue",
        "color:green"
    );   
}

getStudentSummary(Student);