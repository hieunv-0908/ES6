const sum = (arr)=>{
    let result = 0;
    for (const element of arr) {
        if(element % 2 ===0) result += element;
    }
    return result;
}

console.log(sum([1,2,3,4,5,6]));
