class MomoPaymentAdapter {
    constructor(momoPayment){
        this.momoPayment = momoPayment
    }

    payWithVisa(visaPayment){
        const convertedPayment = this.convertToVisaPayMent(this.momoPayment);
        visaPayment.pay(convertedPayment);
    }

    convertToVisaPayMent(momoPayment){
        const convertsionRate = 23000;
        const visaAmout = momoPayment.amount / convertsionRate;
        const visaPayment = {
            cardNumber: momoPayment.cardNumber,
            expiryDate: momoPayment.expiryDate,
            cvv: momoPayment.cvv,
            amount: visaAmout
        }

        return visaPayment;
    }
}

//defind the visaPayment
class VisaPayment {
    pay(payment){
        console.log(`Payming ${payment.amount} USA with Visa card ${payment.cardNumber} and CVV is ${payment.cvv}`);
    }
}
//defind the MomoPayment
class MomoPayment {
    constructor(cardNumber, expiryDate, cvv, amount){
        this.cardNumber = cardNumber,
        this.expiryDate = expiryDate,
        this.cvv = cvv,
        this.amount = amount
    }
}

//create a momo
const momoPayment = new MomoPayment('11345', '12/1', '123', 230000);

const momoAdapter = new MomoPaymentAdapter(momoPayment);

const visaPayment = new VisaPayment();

momoAdapter.payWithVisa(visaPayment)