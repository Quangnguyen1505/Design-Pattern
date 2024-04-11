class Car {
    constructor({ name = 'Toyota', door = 15, price = '2.000.000.000', until = {} }){
        this.name = name;
        this.door = door;
        this.price = price;
        this.until = until;
    }
}

class CarServices {
    CarConfirm = Car
    getCar = (untilNo) => {
        return new this.CarConfirm(untilNo);
    }
}

const CarLogistics = new CarServices();
console.log('car::',CarLogistics.getCar({ until: { no1: ' dres ', no2: 'heals' } }));

class Plane {
    constructor({ name = 'Honda', or = 30, price = '21.000.000.000', until = {} }){
        this.name = name;
        this.or = or;
        this.price = price;
        this.until = until;
    }
}
// CarLogistics.CarConfirm = Plane
// console.log('Plance::',CarLogistics.getCar({ until: { no1: ' ply ', no2: 'heals' } }));
class Plances extends CarServices {
    CarConfirm = Plane
}

const plane = new Plances();
console.log('Plance::',plane.getCar({ until: { no1: ' ply ', no2: 'heals' } }));


