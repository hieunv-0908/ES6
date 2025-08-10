class Employee{
    public name_employee:string;
    protected company:string;
    private phone:string;
    constructor(name_employee:string,company:string,phone:string){
        this.name_employee = name_employee;
        this.company = company;
        this.phone = phone;
    }
    printf_info(){
        console.log(`Name:${this.name_employee},Company:${this.company},Phone:${this.phone}`);
    }        
}

let emplyee1 = new Employee("Hieu","Rekeii Soft","0328441049");
emplyee1.printf_info();
