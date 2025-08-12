class Employee{
    _name:string;
    protected _company:string;
    private _phone:string;
    constructor(_name:string,_company:string,_phone:string) {
        this._name = _name;
        this._company = _company;
        this._phone = _phone;
    }
    print_info(){
        console.log(`Name:${this._name} Company:${this._company} Phone:${this._phone}`);
    }
}

class Manager extends Employee{
    _team_size:number;
    constructor(_team_size:number,_name:string,_company:string,_phone:string) {
        super(_name,_company,_phone);
        this._team_size = _team_size;
    }
    print_info(): void {
        console.log(`Team Size:${this._team_size}`);  
    }
}

let e1 = new Employee("An", "ABC Corp", "0123456789");
e1.print_info();

let m1 = new Manager( 5,"Bình", "ABC Corp", "0987654321");
m1.print_info();

