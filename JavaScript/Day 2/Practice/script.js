
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

// Strings

let age = 20, name='MyName';
console.log("Your name is "+name+" and your age is "+age)
console.log(`Your name is ${name} and your age is ${age}`)


let str = "Hello World ";
// console.log(str)
// console.log(str.charAt(2))
// console.log(str.concat("in JavaScript"))
// console.log(str.endsWith(" "))
// console.log(str.includes("p"))
// console.log(str.indexOf("x"))
// console.log(str.indexOf("l"))
// console.log(str.lastIndexOf("l"))
// console.log(str.length)
// console.log(str.replace("ll", "kk")) // only first occurrence
// console.log(str.replaceAll("l", "k")) // only first occurrence
// console.log(str.startsWith("H"))
// console.log(str.trim())
// console.log(str.trimStart())
// console.log(str.trimEnd())
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.split("")) // converting into character array
// console.log(str.split("o"))
// console.log(str.toString())
// console.log(str.slice(1)) // skips first 1 character
// console.log("Javascript".slice(2, 6)) // 'vasc' picks characters from index 2 to 6, excluding 6
// console.log()

// --------------------------------------------------

// Objects

let userData = {
    id:1,
    name:"User Name 1",
    city: "user city 1"
}

console.log(userData)
console.log(userData.id)
console.log(userData.name)
console.log(userData["city"])

// adding data

userData.age = 20;
console.log(userData)

// extracting all keys
console.log(Object.keys(userData))

// extracting all values
console.log(Object.values(userData))

// extracting entries as array
console.log(Object.entries(userData))

// making object immutable - nothing can be added or modified
Object.freeze(userData);

// stoping addition of data - existing data can be modified
Object.seal(userData);

// --------------------------------------------------

// Arrays

let arr = [12, 'hello', true, undefined]
console.log(arr)

arr.push(21)
console.log(arr)

arr.shift() // first element removed
console.log(arr)

arr.unshift(100)
console.log(arr)
console.log(arr.length)
console.log(arr.at(2))
console.log(undefined)
console.log(null)
console.log(arr.join(" -> ")) // undefined skipped

let arr1 = [1, 2, 3], arr2 = [7, 8, 9];
console.log(arr.concat(arr1, arr2))
// --------------------------------------------------

// map method

let arr3 = ['hi', 'hello', 'bye'];
arr3.map((value, index)=>{
    console.log(index, value);
})

// reduce method

let price_array = [2999, 199, 299];
let total = price_array.reduce((prev, curr)=>{
    return prev+curr;
})
console.log(total) // default initial value is 0

let totalPlus1000 = price_array.reduce((prev, curr)=>{
    return prev+curr;
}, 1000)
console.log(totalPlus1000);


let cartData = [
    {
        id:1,
        name:"Watch",
        price:3200
    },
    {
        id:2,
        name:"Shoes",
        price:1200
    },
    {
        id:3,
        name:"Earphones",
        price:900
    }
]
let total_amount = cartData.reduce((prev, value)=>{
    return prev + value.price;
}, 0); // it may consider default value as object so better to set initial value manually
console.log(total_amount)