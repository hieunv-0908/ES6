let str:string = "banana"
let str2:string = "hello world"

let str3:string = [...new Set(str)].join("");
let str4:string = [...new Set(str2)].join("");
console.log(str3,str4);

