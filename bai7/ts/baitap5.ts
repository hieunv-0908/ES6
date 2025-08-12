    class Account{
        id:string;
        userName:string;
        private passWord:string;
        isLog:boolean;
        role:string;
        constructor(id:string,userName:string,passWord:string,isLog:boolean,role:string) {
            this.id =id;
            this.userName = userName;
            this.passWord = passWord;
            this.isLog = false;
            this.role = role;
        }
        login(userName:string,passWord:string){
            if(userName === this.userName && passWord === this.passWord){
                console.log("Đăng nhập thành công.");
                this.isLog = true;
            }
        }
        logout(){
                if(this.isLog)  {
                    this.isLog = false;
                    console.log(`Đăng xuất thành công`)
                }
        }
        protected getPassWord():string{
            return this.passWord;
        }
    }

    class UserAcc extends Account{
        status:string;
        passWordUser:string;
        constructor(id:string,userName:string,passWord:string) {
            super(id,userName,passWord,false,"Người dùng");
            this.passWordUser = this.getPassWord(); 
            this.status = "active";
        }
        login(userName:string,passWord:string){
            if(userName === this.userName && passWord === this.passWordUser){
                if(this.status === "active"){
                    this.isLog = true;
                    console.log("Đăng nhập thành công.");
                }else{
                    console.log(`Tài khoản đã bị vô hiệu hoá`);
                }
            }
        }
    }

    class Admin extends Account{
        constructor(id:string,userName:string,passWord:string) {
            super(id,userName,passWord,false,"Admin");
        }
        banUser(id_change:string){
            if(this.isLog){
                for(let account of listAcountUser){
                    if(account.id === id_change){
                        account.status = "banned";
                    }
                }
            }else{
                console.log(`Bạn chưa đăng nhập!`);
            }
            
        }
    }


    let listAcountUser:UserAcc[] = [];
    let usc1 = new UserAcc("USC001","Nguyễn Văn A","09082006");
    listAcountUser.push(usc1);
    usc1.login("Nguyễn Văn A","09082006");
    usc1.logout();
    let adm1 = new Admin("adm001","Trần Văn B","AdM0010");
    adm1.login("Trần Văn B","AdM0010");
    adm1.banUser("USC001");
    usc1.login("Nguyễn Văn A","09082006");