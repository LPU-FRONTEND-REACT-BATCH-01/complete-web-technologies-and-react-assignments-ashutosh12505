// Write a JavaScript program that prints numbers from 1 to 100 with the following conditions:
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead of the number
// For numbers that are multiples of both 3 and 5, print "FizzBuzz"
// For all other numbers, print the number itself

function divisibleByBoth(num){
    return num%3 == 0 && num%5 == 0;
}

function divisibleBy3(num){
    return num%3 == 0;
}

function divisibleBy5(num){
    return num%5 == 0;
}

function myFunction(){
    for(let i=1; i<=100; i++){
        if(divisibleByBoth(i))
            console.log("FizzBuzz");
        else if(divisibleBy3(i))
            console.log("Fizz");
        else if(divisibleBy5(i))
            console.log("Buzz");
        else
            console.log(i);
    }
}

myFunction();

// capitalize first letter in a word

let str = "javascript"
str = str.at(0).toUpperCase()+str.substring(1)
console.log(str)

// capitalize first letter of each word of a sentence
let sentence = "hello world in javascript"
let stringArray = sentence.split(" ")
stringArray.forEach(element => {
    result = result + element.toUpperCase();
});

// result = stringArray.join(" ");
console.log(result);

// let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 5, 6]

console.log(arr1.filter((value) => arr2.includes(value)))