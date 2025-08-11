abstract class Shape{
    _name:string;
    constructor(_name:string) {
        this._name = _name;   
    }
    get name_(){
        return this._name;
    }
}

class Rectangdle extends Shape{
    _width:number;
    heigth:number;
    constructor(_width:number,heigth:number,_name?:string) {
        super(_name ?? "Không có thông tin gì");
        this._width = _width;
        this.heigth = heigth;
    }
    get size(){
        return {width:this._width,heigth:this.heigth};
    }
}

let rectangdle = new Rectangdle(15,20,"Hình chữ nhật");

console.log(rectangdle.size);