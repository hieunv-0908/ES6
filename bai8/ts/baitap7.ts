function flatten<T>(input:T[][]):T[]{
    return input.slice().flat(Infinity) as T[];
} 

console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));