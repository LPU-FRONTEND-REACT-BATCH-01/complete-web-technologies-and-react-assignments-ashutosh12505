
// let a = -1;

// a = prompt("Enter a value: "); // default input type is string
// due to type-coersion even string works with below code unless === is used


// if(a<0){
//     console.log("The number is less than 0")
// }else if(a==0){
//     console.log("The number is zero")
// }else{
//     console.log("The number is greater than 0")
// }

// let b = Number(prompt("Enter another value: "));

// if(b<0){
//     console.log("The number is less than 0")
// }else if(b===0){ // works
//     console.log("The number is zero")
// }else{
//     console.log("The number is greater than 0")
// }

// --------------------------------------------------

// let x = Number(prompt("Enter a number: "));

// if(x < 8){
//     for(i = 0; i < x; i++){
//         console.log("The number is: "+x);
//     }
// }else{
    
//     for(i=0; i<x*x; i++){
//         console.log("The number is: "+x);
//     }
// }

// --------------------------------------------------

// normal function

function display(name){
    console.log("Hello", name)
}
display("John")


// named function
let func = function display2(name){
    console.log("Called "+name);
}
func("named function");
// display2("named function"); -- ERROR, cant call directly



// immediate invoke function expression - anonymous function

(function fetchData(){
    console.log("Data Fetched");
})();

// fetchData() -- ERROR, cannot call

// --------------------------------------------------

// arrow functions

let arrowFunction1 = () =>{
    console.log("This is an arrow function 1");
}
arrowFunction1();


let arrowFunction2 = () =>{
    return("This is an arrow function 2");
}
arrowFunction2(); // prints nothing
console.log(arrowFunction2()); // works

let arrowFunction3 = (name) =>{
    // return "Hello", name; only second string returned
    return "Hello "+name;
}
let result = arrowFunction3("John");
console.log(result);

// if there is only one return statement, no need of {} or return keywork. but it is required with multiple statements

let arrowFunction4 = (name) => "Hello "+name;
let result2 = arrowFunction4("passedName");
console.log(result2);


// even () is not required with only one argument.

let arrowFunction5 = name => "Hello "+name;
let result3 = arrowFunction5("myName");
console.log(result3);
// --------------------------------------------------
// higher order function - accepts another function as argument
// the passed function is called callback function


// --------------------------------------------------

function processPrice(price){
    if(price <= 2000){
        return ("No discount, price is "+price);

    }else if(price>2000 && price<=6000){
        return ("15% Off.\nYou have to pay "+0.85*price);

    }else if(price>6000){
        return ("25% Off.\nYou have to pay "+0.75*price);
    }
}

// let price = Number(prompt("Enter the price:"));
let processResult = processPrice(price);
console.log(processResult);

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------