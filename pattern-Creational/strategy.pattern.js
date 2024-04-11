function sale11 ( orginalPrice ){
    return orginalPrice * 0.4;
}

function defaultPrice ( orginalPrice ){
    return orginalPrice;
}

const setTypeInPrice = {
    "11/11" : sale11,
    "default" : defaultPrice
}

function getPrice ( orginalPrice, type ){
    // if( type == "11/11" ){
    //     return sale11(orginalPrice);
    // }

    // if( type == "default" ){
    //     return defaultPrice(orginalPrice);
    // }

    return setTypeInPrice[type](orginalPrice);
}

console.log("Price after::", getPrice(300, "11/11"));