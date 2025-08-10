class Vehicle {
    name_vehicle: string;
    year:number;
    company:string;
    constructor(name_vehicle:string, year:number, company: string){
        this.name_vehicle = name_vehicle;
        this.year = year;
        this.company = company;
    }
} 

let toyota_vios = new Vehicle("Toyota Vios",2022,"sedan_B");
let  Mazda_CX_5= new Vehicle("Mazda_CX_5",2012,"SUV");

console.log(toyota_vios.name_vehicle,toyota_vios.year,toyota_vios.company);
console.log(Mazda_CX_5.name_vehicle,Mazda_CX_5.year,Mazda_CX_5.company);
