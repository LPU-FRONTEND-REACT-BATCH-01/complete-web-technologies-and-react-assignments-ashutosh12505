// // arr.sort is bubble sort

// let arr1 = ['apple', 'yatch', 'power', 'mango', 'bubble']
// console.log(arr1)
// arr1.sort()
// console.log(arr1)

// // return type of sort() is the array itself

// let arr2 = [1, 4, 2, 7, 3, 5, 9]
// console.log(arr2)
// arr2.sort() // default is ascending order
// console.log(arr2)

// let arr3 = [12, 56, 34 ,89, 10, 83]
// console.log(arr3)
// arr3.sort((a, b) => a-b); // if a-b is less than 0, order will remain same otherwise swapped
// console.log(arr3)

// // sort modifies the original array
// // filter returns a new array without modifying the original array

// // arr2 = [1, 4, 2, 7, 3, 5, 9]
// let temp1 = arr2.filter((element) => element>5);
// console.log(temp1)

// // arr1 = arr
// // now any change to arr1 will also modify arr
// // to properly copy
// // newArray = [...oldArray]

// // some() - to check if any element is present in the array or not
// // returns true/false

// let arr4 =['apple', 'mango', 'banana', 'kiwi']
// let applePresent = arr4.some(each => each === 'apple')
// let tomatoPresent = arr4.some(each => each === 'tomato')

// console.log(applePresent)
// console.log(tomatoPresent)

// // arr.find() returns the matched elements. if no elements match, it returns undefined
// // structuredClone() - to copy an object
// // newObj = structuredClone(oldObj)

// let arr5 = [1, 2, 3, 4, 5, 6]
// console.log(arr5) // prints the array
// console.log(...arr5) // prints each element separately
// console.log(...arr5, 7, 8, 9) // adds elements at the end

// let originalObject = {
//     username: 'user',
//     city: 'pune'
// }
// let newObject = {...originalObject, state:'maharashtra'} // can also add data while copying

// console.log(originalObject)
// console.log(newObject)

// // rest operator

// function func1(number){
//     console.log(number);
// }

// function func2(...number){ // rest operator
//     console.log(number)
// }

// func1(1, 2, 3); // prints only 1
// func2(1, 2, 3); // prints [1, 2, 3]

// -------------------------------------------------------

// setTimeout(callbackFunction, time (in milliseconds));

// console.log("Start")

// setTimeout(() => {
//     console.log("Timeout Over 1")
// }, 3000);

// setTimeout(() => {
//     console.log("Timeout Over 2")
// }, 1000);

// setTimeout(() => {
//     console.log("Timeout Over 3") // will be handled after synchronous tasks. even with 0 timeout
// },0);

// console.log("End")

// ------------------------------------------------------

// function chaining using setTimeout() and callbackFunctions

// myFunction = ()=>{
//     func2()
// }

function func1(myFunction){
    setTimeout(() => {
        console.log("Func 1 called");
        myFunction()
    }, 1000);
}

function func2(myFunction){
    setTimeout(() => {
        console.log("Func 2 called");
        myFunction()
    }, 1000);
}

function func3(myFunction){
    setTimeout(() => {
        console.log("Func 3 called");
        myFunction()
    }, 1000);
}

function func4(myFunction){
    setTimeout(() => {
        console.log("Func 4 called");
        myFunction()
    }, 1000);
}

function func5(){
    setTimeout(() => {
        console.log("Func 5 called");
    }, 1000);
}

func1(()=>{
    func2(()=>{
        func3(()=>{
            func4(()=>{
                func5();
            })
        })
    })
})

// func1(()=>{
//     func2()
// })

