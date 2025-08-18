function mergeObjects<T, U extends {}>(ob1:T,ob2:U):{}{
    return {...ob1, ...ob2};
}

let person:object = { name: "Join" }
let job:object = { role: "Developer" }

console.log(mergeObjects(person, job));
