const check_element = (arr,num)=>{
    if(!arr.includes(num)){
        console.log(`False`);
    }else{
        console.log(`True`);
    }
}

check_element([1,2,3,4,5],3)
check_element([1,2,3,4,5],6)