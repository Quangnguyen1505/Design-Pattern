class Simple_Pattern {
    constructor(name = 'Stuck10',door = 16, price = '100.000đ'){
        this.name = name;
        this.door = door;
        this.price = price;
    }

    static getSimple_Pattern = (carvo)=>{
        switch(carvo){
            case '10' :
                return new Simple_Pattern();
            case '20' :
                return new Simple_Pattern('Stuck20',32,'2.000.000đ');
        }

    }

}
console.log(Simple_Pattern.getSimple_Pattern('10'));