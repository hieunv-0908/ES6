const checkvarity = a =>{
    if(typeof a !=="number" || isNaN(a)){
        console.log(`a không phải số`);
        return;
    }
    if(!Number.isInteger(a)){
        console.log(`a không phải là số nguyên`);
        return;
    }
    if(a%2===0){
        console.log(`a là số chẵn`);
    }else{
        console.log(`a là số lẻ`);
    }
}
checkvarity(16.7);