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



// class MomoPaymentAdapter {
//     constructor(momo){
//         this.momo = momo;
//     }

//     payWithVisa(visaPayment){
//         const convertedPayment = this.converMomoToPayment(this.momo);
//         visaPayment.pay(convertedPayment);
//     }

//     converMomoToPayment(momo){
//         const convertsionRate = 23000;
//         const amoutMomo = momo.amount / convertsionRate;

//         const result = {
//             cardNumber: momo.cardNumber,
//             expiryDate: momo.expiryDate,
//             cvv: momo.cvv,
//             amount: amoutMomo
//         } 

//         return result;
//     }
// }

// class visaPayment {
//     pay(payment){
//         console.log(`carNumber::${payment.cardNumber} and amount ${payment.amount}`);
//     }
// }

// class MomoPayment {
//     constructor(cardNumber, expiryDate, cvv, amount){
//         this.cardNumber = cardNumber;
//         this.expiryDate = expiryDate;
//         this.cvv = cvv;
//         this.amount = amount;
//     }
// }

// const momoPayment = new MomoPayment("12334", "12/5", '456', 230000);
// const momoAdapter = new MomoPaymentAdapter(momoPayment);

// const visaMomo = new visaPayment();

// momoAdapter.payWithVisa(visaMomo);






// class MomoAdapter{
//     constructor(momopayment){
//         this.momopayment = momopayment;
//     }

//     payUseMomo(paymentMomo){
//         const converMomo = this.converMomoToPayment(this.momopayment)
//         paymentMomo.pay(converMomo);
//     }

//     converMomoToPayment(momopayment){
//         const price = 23000;
//         const amountPrice = momopayment.amount / price;

//         const result = {
//             cardNumber: momopayment.cardNumber,
//             expiryDate: momopayment.expiryDate,
//             cvv: momopayment.cvv,
//             amount: amountPrice
//         }

//         return result;
//     }
// }

// class VisaPayment{
//     pay(paymentMomo){
//         console.log(`cardNumber::${paymentMomo.cardNumber} and amount:::${paymentMomo.amount}`);
//     }
// }

// class MomoPayment{
//     constructor(cardNumber, expiryDate, cvv, amount){
//         this.cardNumber = cardNumber
//         this.expiryDate = expiryDate
//         this.cvv = cvv
//         this.amount = amount
//     }
// }

// const momoPayment = new MomoPayment("123", "12/2", "456", 230000);
// const momoAdapter = new MomoAdapter(momoPayment);

// const visaPayment = new VisaPayment();

// momoAdapter.payUseMomo(visaPayment);