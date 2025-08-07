function check_type_element(arr:any[]):boolean{
    return arr.every(item => typeof item === "number");
}

function dtb(arr:any[]):number{
    let result:number = 0;
    arr.forEach(element => result += element);
    return result/arr.length;
}

let arr:any[] = [1,2,3];

if(check_type_element(arr)){
    console.log(dtb(arr));
}else{
    console.log("Co phan tu khong phai so trong mang"); 
}