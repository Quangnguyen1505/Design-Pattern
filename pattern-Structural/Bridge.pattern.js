class PaymentProcess{
    pay(amout){

    }
}

class VisaPaymentProcess extends PaymentProcess {
    constructor(cardNumber, expiryDate, cvv){
        super();
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }

    pay(amount){
        console.log(`Paying ${amount} USA with visa card ${this.cardNumber}`);
    }
}

class MomoPaymentProcess extends PaymentProcess {
    constructor(phoneNumber){
        super();
        this.phoneNumber = phoneNumber;
    }

    pay(amount){
        console.log(`Paying ${amount} USA with phone ${this.phoneNumber}`);
    }
}

class MemberRegistration {
    constructor(paymentProcess){
        this.paymentProcess = paymentProcess;
    }

    register(){
        const amount = 100;
        this.paymentProcess.pay(amount);
        console.log(`Register for youtube membership`);
    }
}

const newVisaPaymentProcess = new VisaPaymentProcess("1234", "12/3", "546");
const registerMemberVisa = new MemberRegistration(newVisaPaymentProcess);
registerMemberVisa.register();

const newMomoPaymentProcess = new MomoPaymentProcess("0525444044");
const registerMemberMomo = new MemberRegistration(newMomoPaymentProcess);
registerMemberMomo.register();