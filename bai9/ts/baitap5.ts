class DataStore<T>{
    private data: T[] = [];
    add(item:T):void{
        this.data.push(item);
    }
    getAll(): T[] {
        return this.data;
    }
    remove(index:number):void{
        this.data.splice(index, 1);
    }
}

const data = new DataStore<number>();
data.add(1);
data.add(2);
data.add(3);
console.log(data.getAll());
data.remove(1);
console.log(data.getAll());