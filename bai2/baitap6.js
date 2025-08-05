const check_end_string = (str1,str2)=>{
    return str1.endsWith(str2)
}

console.log(check_end_string("Hello, World!", "Hello"));
console.log(check_end_string("Hi there!", "there!"));