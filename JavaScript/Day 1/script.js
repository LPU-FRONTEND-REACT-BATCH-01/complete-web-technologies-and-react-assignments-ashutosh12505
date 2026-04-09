// console.log(a) // ReferenceError: Cannot access 'a' before initialization
// let a;
// a = 10;
// console.log(a) // 10

// console.log(b) // undefined
// var b;
// b = 20;
// console.log(b) // 20

// -----------------------

// console.log(a)
// console.log(b)
// var b;
// var a = 20;
// console.log(b)
// let c = 30;
// // console.log(d)
// // let d;
// // console.log(d)

// console.log(typeof a)

// ----------------------------

let a = 'hello'
let b = true
let c = null // object
let d = undefined // undefined
let e = 10
let f = 10.5
let g = 10n
let h = [1, 2, 3, 4] // object

function sample(){}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c); // object
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof sample);

a = 2 + '2' // 22
b = 2 - '2' // 0

console.log(a)
console.log(typeof a)

console.log(b)
console.log(typeof b)