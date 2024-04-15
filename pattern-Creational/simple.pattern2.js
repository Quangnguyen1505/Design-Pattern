// // class Product {
// //     constructor(name = "quang", email = "ssass", brand = 'honda'){
// //         this.name = name;
// //         this.email = email;
// //         this.brand = brand;
// //     }

// //     static getProduct = (untilNo) => {
// //         switch(untilNo){
// //             case '10':
// //                 return new Product();
// //             case '20':
// //                 return new Product("mai","aaa","yamaha");
// //         }
// //     }
// // }
// // console.log("Aaa",Product.getProduct("20"));

// class Car {
//     constructor({ name = "honda", door = 24, quantity = 12, until = {} }) {
//         this.name = name;
//         this.door = door;
//         this.quantity = quantity;
//         this.until = until;
//     }
// }

// class CarService {
//     CarConfirm = Car;
//     getCar = (untilNo) => {
//         return new this.CarConfirm(untilNo);
//     }
// }

// class Plane {
//     constructor({ name = "palens2", door = 22, quantity = 45, until = {} }) {
//         this.name = name;
//         this.door = door;
//         this.quantity = quantity;
//         this.until = until;
//     }
// }

// class PlaneService extends CarService {
//     CarConfirm = Plane;
// }

// const CarLogistics = new CarService();
// console.log("car::", CarLogistics.getCar({ until : { no1: "a", no2: 'b' } }));

// const PlaneLogistics = new PlaneService();
// console.log("car::", PlaneLogistics.getCar({ until : { no1: "d", no2: 'e' } }));
 

class Car {
    constructor({name = "toyota", quantity = 4, price = 150000, untils = {} }){
        this.name = name;
        this.quantity = quantity
        this.price = price;
        this.untils = untils
    }
}

class CarService {
    ConfirmObject = Car;
    getCar(untilNo){
        return new this.ConfirmObject(untilNo)
    }
}

class Plance {
    constructor({name = "Vietject", quantity = 5, price = 411111, untils = {} }){
        this.name = name;
        this.quantity = quantity
        this.price = price;
        this.untils = untils
    }
}

class PlanceServices extends CarService {
    ConfirmObject = Plance;
}

const car = new CarService();
console.log(car.getCar({untils: {no1: 123, no2: 456}}));

const plance = new PlanceServices();
console.log(plance.getCar({untils: {no3: 789, no4: 101112}}));