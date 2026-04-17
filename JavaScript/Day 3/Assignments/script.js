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

// ------------------------------------------------------------------

// Task - validate username and password using some() method

let users = [
    {
        id: 1,
        username: 'user 1',
        password: 'pass 1'
    },
    {
        id: 2,
        username: 'user 2',
        password: 'pass 2'
    },
    {
        id: 3,
        username: 'user 3',
        password: 'pass 3'
    },
    {
        id: 4,
        username: 'user 4',
        password: 'pass 4'
    },
    {
        id: 5,
        username: 'user 5',
        password: 'pass 5'
    },
    {
        id: 6,
        username: 'user 6',
        password: 'pass 6'
    },
    {
        id: 7,
        username: 'user 7',
        password: 'pass 7'
    },
    {
        id: 8,
        username: 'user 8',
        password: 'pass 8'
    }
]

// username not found
let inputData1 = [
    {
        id: 1,
        username: 'user 10',
        password: 'pass 10'
    }
]

// username found but password incorrect
let inputData2 = [
    {
        id: 2,
        username: 'user 1',
        password: 'pass 10'
    }
]

// correct credentials
let inputData3 = [
    {
        id: 3,
        username: 'user 3',
        password: 'pass 3'
    }
]

// incorrect username
let user1 = users.find(eachUser => eachUser.username === inputData1[0].username);
if (user1) {
    if (user1.password === inputData1[0].password) {
        console.log('Login Successful');
    } else {
        console.log('Incorrect Password');
    }
} else {
    console.log('Username not found');
}

// incorrect password
let user2 = users.find(eachUser => eachUser.username === inputData2[0].username);
if (user2) {
    if (user2.password === inputData2[0].password) {
        console.log('Login Successful');
    } else {
        console.log('Incorrect Password');
    }
} else {
    console.log('Username not found');
}

// correct password
let user3 = users.find(eachUser => eachUser.username === inputData3[0].username);
if (user3) {
    if (user3.password === inputData3[0].password) {
        console.log('Login Successful');
    } else {
        console.log('Incorrect Password');
    }
} else {
    console.log('Username not found');
}