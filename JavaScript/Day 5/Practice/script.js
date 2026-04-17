// array destructuring

// let arr = [1, 2, 3, 4];
// let [a, b, c, d] = arr;

// console.log(a, b) // 1 2

// object destructuring

// let users = {
//     id:1,
//     name: 'Name 1',
//     city: 'City 1'
// }

// let {city} = users; // property name should exactly be the same
// console.log(city) // City 1

let users2 = {
    id:1,
    name:'Name 2',
    location:{
        city: 'City 2',
        state: 'State Name'
    }
}
// let {name, location:{city}} = users2
// console.log(name, city)

// if whole location object is needed

// let {name, location} = users2
// console.log(name, location)

// if only location is needed

// let {city, state} = users2.location;
// console.log(city)
// console.log(state)

// -----------------------------------------------------

let users = {
    id:1,
    username:'Nick',
    userLocation:{
        city:'Jalandhar',
        state:'Punjab'
    },
    phone:'12847619282170',
    skills:{
        frontend:['HTML', 'CSS', 'React'],
        backend:['Java', 'Springboot']
    }
}

let {id, username, userLocation, phone, skills} = users;
console.log(id)
console.log(username)
console.log(userLocation)
console.log(phone)
console.log(skills)

let {city, state} = users.userLocation
console.log(city)
console.log(state)

let {skills:{frontend}, skills:{backend}} = users
// or
// let { skills: { frontend, backend } } = users;

console.log(frontend)
console.log(backend)

let [html, css, react] = users.skills.frontend;
console.log(html)
console.log(css)
console.log(react)

let [java, springboot ]= users.skills.backend;
console.log(java)
console.log(springboot)

// -----------------------------------

// let {
//     id,
//     username,
//     phone,
//     userLocation: { city, state },
//     skills: {
//         frontend: [html, css, react],
//         backend: [java, springboot]
//     }
// } = users;

// console.log(id, username, phone);
// console.log(city, state);
// console.log(html, css, react);
// console.log(java, springboot);