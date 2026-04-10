// arr.sort is bubble sort

let arr1 = ['apple', 'yatch', 'power', 'mango', 'bubble']
console.log(arr1)
arr1.sort()
console.log(arr1)

// return type of sort() is the array itself

let arr2 = [1, 4, 2, 7, 3, 5, 9]
console.log(arr2)
arr2.sort() // default is ascending order
console.log(arr2)

let arr3 = [12, 56, 34 ,89, 10, 83]
console.log(arr3)
arr3.sort((a, b) => a-b); // if a-b is less than 0, order will remain same otherwise swapped
console.log(arr3)

// sort modifies the original array
// filter returns a new array without modifying the original array

// arr2 = [1, 4, 2, 7, 3, 5, 9]
let temp1 = arr2.filter((element) => element>5);
console.log(temp1)

// arr1 = arr
// now any change to arr1 will also modify arr
// to properly copy
// newArray = [...oldArray]

// some() - to check if any element is present in the array or not
// returns true/false

let arr4 =['apple', 'mango', 'banana', 'kiwi']
let applePresent = arr4.some(each => each === 'apple')
let tomatoPresent = arr4.some(each => each === 'tomato')

console.log(applePresent)
console.log(tomatoPresent)

// arr.find() returns the matched elements. if no elements match, it returns undefined