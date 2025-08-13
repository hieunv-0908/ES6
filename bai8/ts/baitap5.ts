function genericsFunction<T extends number>(arr:T[]):T | undefined{
    return arr.find(element=>element % 2===0) ?? undefined;
}


console.log(genericsFunction([1, 3, 5, 6]));
console.log(genericsFunction([1, 3, 5]));   