function withDefault<T>(value?: T,): T | "default" {
    return value ?? "default";
}

console.log(withDefault()); 
console.log(withDefault(42)); 
console.log(withDefault(true));
