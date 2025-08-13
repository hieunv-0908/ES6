function findElement<T>(input:T[],value:T):T | undefined{
    return input.find(element=>element === value) ?? undefined;
} 

console.log(findElement([1, 3, 5, 6],3));
console.log(findElement([1, 3, 5],6));   