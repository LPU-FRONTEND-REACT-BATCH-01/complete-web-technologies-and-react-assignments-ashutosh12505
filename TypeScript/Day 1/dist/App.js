"use strict";
// let a:number = 120;
// let b:bigint = 12n;
// let c:string = 'Hello';
// let d:boolean = true;
// let e:undefined = undefined;
// let f:null = null;
// let g:symbol = Symbol("id");
let addition = () => {
    return 20;
};
let addition2 = (a, b) => {
    return a + b;
};
console.log(addition2(10, 20));
function payment(paymentMode) {
    return `You have paid using ${paymentMode}`;
}
console.log(payment("Card"));
console.log(payment("UPI"));
function pay(amount, mode) {
    if (mode == "COD") {
        console.log("Original Amount: " + amount);
        console.log("COD Final Amount: " + (amount + 50));
    }
    else if (mode == "Card") {
        console.log("Original Amount: " + amount);
        console.log("Card Final Amount: " + 0.95 * amount);
    }
    else if (mode == "NetBanking") {
        console.log("Original Amount: " + amount);
        console.log("NetBanking Final Amount: " + amount);
    }
    else if (mode == "UPI") {
        console.log("Original Amount: " + amount);
        console.log("UPI Final Amount: " + amount * 0.90);
    }
}
pay(1000, "COD");
pay(1000, "Card");
pay(1000, "NetBanking");
pay(1000, "UPI");
