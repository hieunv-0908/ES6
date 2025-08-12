class Account{
    accountNumber:number;
    protected balance:number;
    protected history:string[];
    protected status:boolean;
    constructor(balance:number) {
        this.accountNumber = 5;
        this.balance = balance;
        this.history = [];
        this.status = false;
    }
    deposit(money:number){
        this.balance += money;
        this.history.push(`+${money}`);
        console.log(`Nạp tiền thành công`);
    }
    withdraw(moneyDraw:number){
        if(moneyDraw >= this.balance && this.balance !== 0){
            console.log(`Tài khoản của bạn không đủ để thực hiện giao dịch này`);
        }else{
            console.log(`Rút tiền thành công`);
            this.balance -= moneyDraw;
            this.history.push(`-${moneyDraw}`);
        }
    } 
    showHistory(){
        this.history.forEach(gg=>{
            console.log(gg);
        })
    } 
}

class SavingAccount extends Account{
    interestRate:number;
    constructor(interesRate:number,balance:number) {
        super(balance);
        this.interestRate = interesRate;
    }
}

let sva1 = new SavingAccount(0.5,100);
sva1.deposit(200);
sva1.withdraw(100);
sva1.showHistory();
