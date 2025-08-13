function partialUpdate(ob1:Object,ob2:Object):Object{
    return Object.assign(ob1,ob2);
} 

console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ age: 31 }));
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ name: 'Bob', job: 'Designer' }));
