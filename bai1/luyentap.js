// var: khai bao lai duoc.
// let,const: khong khai bao lai duoc


// Phạm vi hoạt động

/*

- var: khai bao ton cuc co the thay doi ben ngoai block
- let,const: chi ton tai trong block
- const: khong the gan lai gia tri

- hoisting: truoc khi cac file duoc dua len trinh duyet 
se duoc trinh duyet doc truoc toan bo file 1 luot va
cac dong code duoc coi la khai bao se duoc dua len dau 
de khai bao truoc.

*/

// let numbers = [1,2,3,4,5];
// let [a,b,c,d,e] = numbers;
let student = {
    id:1,
    full_name : "Hieu",
    email: "hieu@mail.com"
}
let {id,full_name,email} = student;
console.log(); 