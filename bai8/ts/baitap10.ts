function bai10<T extends string>(str:T):string{
    let max_lenght_element:any;
    if(typeof str === "string"){
        let str_temp = str.split(/\s+/);
        max_lenght_element = str_temp[0];
        for (let index = 0; index < str_temp.length; index++) {
            let element:string | undefined = str_temp[index];
            element = [... new Set(element)].join("");
            if(element.length > max_lenght_element.length){
                max_lenght_element = element;
            }
        }
    }
    
    return max_lenght_element;
}

console.log(bai10("hello world apple banana orange pumpkin cucumber"));
