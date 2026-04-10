// sort the below array based on their name, and based on their prices
// filter for price>2000

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
        price:1900
    },
    {
        id:4,
        name:"Bagpack",
        price:3200
    },
    {
        id:5,
        name:"Laptop Stand",
        price:1150
    },
    {
        id:6,
        name:"Laptop Charger",
        price:1600
    }
]

let sortedByPrice = [...cartData].sort((a, b) => a.price - b.price);
let sortedByName = [...cartData].sort((a, b) => a.name.localeCompare(b.name));
let filteredByPrice = cartData.filter((each) => each.price>2000);

console.log(cartData)
console.log(sortedByName)
console.log(sortedByPrice)
console.log(filteredByPrice)