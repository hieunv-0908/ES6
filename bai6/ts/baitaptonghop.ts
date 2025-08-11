interface IAnimal{
    name:string;
    age:number;
    category:string;
    sound():void;
    get_detail():void;
    move():void;
    feed():void;
}

abstract class Animal implements IAnimal{
    name:string;
    age:number;
    category:string;
    food_type:string;
    constructor(name:string,age:number,category:string,food_type:string) {
        this.name = name;
        this.age = age;
        this.category = category;
        this.food_type = food_type;
    }
    sound():string{
        return "Âm thanh";
    }
    get_detail():string{
        return ``
    }
    abstract move():void;
    feed(){
        console.log("Đớp");
    }
}

class Mamal extends Animal{
    private fur_color:String;
    constructor(fur_color:string,name:string,age:number,category:string,food_type:string) {
        super(name,age,category,food_type);
        this.fur_color = fur_color;
    }
    move(){
        console.log("Đi");
    }
}

class Bird extends Animal{
    private fur_color:String;
    constructor(fur_color:string,name:string,age:number,category:string,food_type:string) {
        super(name,age,category,food_type);
        this.fur_color = fur_color;
    }
    move(){
        console.log("Bay");
    }
}

class Reptile extends Animal{
    private fur_color:String;
    constructor(fur_color:string,name:string,age:number,category:string,food_type:string) {
        super(name,age,category,food_type);
        this.fur_color = fur_color;
    }
    move(){
        console.log("Bò");
    }
}
