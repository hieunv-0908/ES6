function genericTest<T,U>(el1:T,el2:U):T&U{
    return {...el1,...el2};
}

const a = { name: "Hieu" };
const b = { age: 20 };
const merged = genericTest(a, b);
console.log(merged.name);
console.log(merged.age);