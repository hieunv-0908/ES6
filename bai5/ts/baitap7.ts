function processInput(input: number | string | boolean):any{
    if(typeof input === "boolean"){
        return input;
    }
    if(typeof input === "number"){
        return input**2;
    }
    if([...input].every(number => /[0-9]/.test(number))){
        return Number(input)**2;
    }else{
        let count:number = 0;
        [...input].forEach((char)=>{
            if(/[a-zA-Z]/.test(char))count++;
        })
        return count;
    }
}


console.log(processInput("123"));
