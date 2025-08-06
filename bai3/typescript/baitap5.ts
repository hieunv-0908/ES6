let first_name:string = "nguyễN";
let last_name:string = "Hiếu";
if(first_name !== first_name.toLowerCase() || last_name !== last_name.toLowerCase()){
    first_name = first_name[0]?.toUpperCase() + first_name.slice(1).toLowerCase();
    last_name = last_name[0]?.toUpperCase() + last_name.slice(1).toLowerCase();
}
let full_name:string = first_name + " Văn " + last_name; 
console.log(full_name);
