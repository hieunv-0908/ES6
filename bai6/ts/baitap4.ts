interface Geometry{
    calculate_area():number;
    calculate_perimeter():number;
} 

class Circle implements Geometry{
    private radius:number;
    constructor(radius:number) {
        this.radius = radius;
    }
    calculate_area(): number {
        return Math.PI * 2 * this.radius;
    }
    calculate_perimeter(): number {
        return Math.PI * this.radius;
    }
}

class Rectangle  implements Geometry{
    private _width:number;
    private heigth:number;
    constructor(_width:number,heigth:number){
        this._width = _width;
        this.heigth = heigth;
    }
    calculate_area(): number {
        return (this._width + this.heigth) * 2;
    }

    calculate_perimeter(): number {
        return this._width * this.heigth;
    }
}

let circle = new Circle(5);
let rectangle = new Rectangle(10,4);

console.log(circle.calculate_area(),circle.calculate_perimeter(),rectangle.calculate_area(),rectangle.calculate_perimeter());
