class Voucher {
    clac(value){
        return value * 0.9;
    }
}

class Fees {
    clac(){
        return 5;
    }
}

class Shipping {
    clac(value){
        return value * 1.05;
    }
}

class ShoppeFacedePattern {
    constructor(){
        this.voucher = new Voucher();
        this.fees = new Fees();
        this.shipping = new Shipping();
    }

    clac(price){
        price = this.voucher.clac(price);
        console.log("frice after have voucher::", price);

        price = this.shipping.clac(price);
        console.log("frice after have shipping::", price);

        price += this.fees.clac();
        console.log("frice after have free::", price);
    }
}

function comsumerShoppe(price){
    const newShoppe = new ShoppeFacedePattern();

    console.log(`Price:: ${newShoppe.clac(price)}`);;
}

comsumerShoppe(120000);