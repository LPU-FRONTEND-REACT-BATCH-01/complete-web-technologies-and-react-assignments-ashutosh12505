// let a:number = 120;
// let b:bigint = 12n;
// let c:string = 'Hello';
// let d:boolean = true;
// let e:undefined = undefined;
// let f:null = null;
// let g:symbol = Symbol("id");

// let h:any = 1234; // can be any type of data
// h.toUpperCase(); // compiler ignores
// error in console



// let i:unknown = 'asfksjgbf'; // can be any type of data
// let i:unknown = 10; // can be any type of data
// let i:unknown = true; // can be any type of data
// used when type is unknown (api responses may be array/object)

// if(typeof i === 'string'){
//     // console.log(i.charAt(0).toUpperCase()+i.substring(1))

//     let arr = i.split("")
//     arr[0] = arr[0].toUpperCase();
//     console.log(arr.join(""))

// }else if(typeof i === 'number'){
//     console.log(i+100)

// }else if (typeof i === 'boolean')
//     console.log(!i);

// -----------------------------------------------------------------


// let arr = [1, 2, 3, 4]; type: number
// let arr = [1, 2, 3, 'hello']; type number|string (union)

// let arr:number[] = [1, 2, 3, 4, 5]; (now cant push another type)

// let arr:[string] = ["hello"]; // error - must be multiple strings

// to fix the size of array:
// let arr:[string] = ["hello"]; // only one string possible

// let arr:[number, number] = [1, 2];

// // heterogeneous is also possible
// let arr:[number, string] = [20, "hello"]
// arr.push("another string");
// console.log(arr) // array methods works

// const arr:[number, number] = [21, 22]; // can be modified, because const is in javascript not typescript

// let arr: readonly [number, string] // now cant be modified

// -----------------------------------------------------------------

// objects in typescript - internal type must be provided

// let obj:{id:number, name:string} = {
//     id:1,
//     name:'Name'
// }

// console.log(obj.id);


// // internal properties cant be accessed
// let obj2:Object = {
//     id:2,
//     name:'name 2'
// }
// console.log(obj2)

// // cannot miss declared property or cannot add undeclared property
// let obj3:{id:number, name:string, isAvailable:boolean} = {
//     id:3,
//     name:'name 3',
//     isAvailable:true
// }
// console.log(obj3)

// // 'object' is only present in typescript, not in javascript
// // extra properties are only for compiler checking. they are not transpiled in javascript code

// // object oriented programming
// interface User{
//     id:number,
//     name:string
// }

// // any 'User' mut have both the properties
// let user1: User = {
//     id:1,
//     name:'user 1'
// }

// console.log(user1)

// // creating class
// class user2 implements User{
//     id = 2;
//     name = 'user 2';
// }

// interface Product{
//     id:number,
//     title:string,
//     price:number
// }

// let productsArray:Product[] = [
//     {
//         id : 101,
//         title : 'product 1',
//         price : 1100,
//     },
//     {
//         id : 102,
//         title : 'product 2',
//         price : 1200,
//     },
//     {
//         id : 103,
//         title : 'product 3',
//         price : 1300,
//     },
//     {
//         id : 104,
//         title : 'product 4',
//         price : 1400,
//     },
//     {
//         id : 105,
//         title : 'product 5',
//         price : 1500,
//     }
// ]

// console.log(productsArray)
// console.log(productsArray[0])
// console.log(productsArray[0].title)

// productsArray.push({id:106, title:'product 6', price:1600})
// console.log(productsArray)

// function display(name:string):void{
//     console.log(name.toUpperCase())
// }

// function func2(name:string):never{
//     throw new Error("Its an error");
//     console.log("Unreachable line")
// }

// -------------------------------------------

// type Bike = {
//     id:number,
//     name:string
// }

// let bike1 : Bike = {
// }

// alias for built-in types
// type n = number
// let a:n = 1

// type Admin = "Admin"
// let x:Admin = "Admin" // cannot be anything else

// type numberArray = number[]
// let arr:numberArray = [1, 2, 3] // cannot be anything else other than a number array

// type Role = "Admin" | "Manager" | "Employee"
// let anyUser:Role = "Employee" // can be any of Admin, Manager, Employee

// type numString = [number, string]
// let var1 : numString = [21, "abcd"]


// optional

// function displayDetails(name:string, age:number, email?:string){
//     console.log(`Name = ${name}, age = ${age} and email = ${email}`)
// }

// optional parameters cannot have defaul values
// displayDetails('name 1', 20, 'mail 1')
// displayDetails('name 1', 20) // email = undefined

type Add = (a:number, b:number)=>{} // due to {}, except 'null' and 'undefined' something must be returned
let addition:Add = ()=>{
    return 20;
}

let addition2:Add = (a, b)=>{
    return a+b;
}
console.log(addition2(10, 20));

type AvailPaymentOptions = "UPI" | "Card" | "COD" | "Netbanking"
function payment(paymentMode:AvailPaymentOptions){
    return `You have paid using ${paymentMode}`
}
console.log(payment("Card"))
console.log(payment("UPI"))

// task

type paymentModes = "COD" | "Card" | "NetBanking" | "UPI"
function pay(amount:number, mode:paymentModes){
    if (mode=="COD"){
        console.log("Original Amount: "+amount);
        console.log("COD Final Amount: "+(amount+50));

    }else if(mode=="Card"){
        console.log("Original Amount: "+amount);
        console.log("Card Final Amount: "+0.95*amount);

    }else if(mode=="NetBanking"){
        console.log("Original Amount: "+amount);
        console.log("NetBanking Final Amount: "+amount);

    }else if(mode=="UPI"){
        console.log("Original Amount: "+amount);
        console.log("UPI Final Amount: "+amount*0.90);
    }
}
pay(1000, "COD");
pay(1000, "Card");
pay(1000, "NetBanking");
pay(1000, "UPI");