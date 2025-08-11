abstract class Job{
    type:string;
    constructor(type:string){
        this.type = type;
    }
    print_type(){
        console.log(this.type);
    }
    abstract calculateSalary():void;
}

class PartimeJob extends Job{
    working_hour:number;
    constructor(working_hour:number,type:string){
        super(type);
        this.working_hour = working_hour;
    }
    calculateSalary(): void {
        console.log(`${(this.working_hour * 30000).toLocaleString("vi-VN",{
            style:"currency",
            currency : "VND"
        })}`);
    }
} 


class FulltimeJob extends Job {
    constructor(type:string){
        super(type);
    }
    calculateSalary(): void {
        console.log(`${(10000000).toLocaleString("vi-VN",{
            style:"currency",
            currency: "VND",
        })}`);
    }
}

let partime_job = new PartimeJob(4,"Tay chân");
let fulltime_job = new FulltimeJob("Giấy tờ");

partime_job.calculateSalary();
fulltime_job.calculateSalary();

