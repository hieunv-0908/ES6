interface change_speed{
    speed_up():number;
    slow_down():number;
    stop():number;
}

class Vahicle implements change_speed{
    private speed:number;
    constructor() {
        this.speed = 0;
    }
    speed_up():number {
        return this.speed += 2;
    }

    slow_down(): number {
        return this.speed -=2;
    }

    stop(): number {
        return this.speed = 0;
    }
}

let motobyce = new Vahicle;
console.log(motobyce.speed_up(),motobyce.slow_down(),motobyce.stop());