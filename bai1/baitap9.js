function mergeSortedArrays(arr1, arr2) {
    return [...merged, ...arr1, ...arr2].sort((a,b)=>a-b);
}
const a = [1, 2, 3, 5, 9];
const b = [4, 6, 7, 8];

console.log(mergeSortedArrays(a, b));  