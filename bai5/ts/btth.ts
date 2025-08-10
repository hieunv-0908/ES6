class Animal {
    private name_animal:string;
    public age:number;
    protected species:string;
    constructor(name:string,age:number,species:string){
        this.name_animal = name;
        this. age= age;
        this.species = species;
    } 
    speak_name(){
        console.log("I am animal");   
    }
    get_name(){

    }
    set_name(){

    }
}

