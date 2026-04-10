// Task

function processPrice(price){
    if(price <= 2000){
        return ("No discount, price is "+price);

    }else if(price>2000 && price<=6000){
        return ("15% Off.\nYou have to pay "+0.85*price);

    }else if(price>6000){
        return ("25% Off.\nYou have to pay "+0.75*price);
    }
}

let price = Number(prompt("Enter the price:"));
let processResult = processPrice(price);
console.log(processResult);

// --------------------------------------------------

// username, email, password
// username - remove space, lowercase
// return username
// email - lowercase, separate domain and username
// return array containing domain and username
// password - length > 8, contain @, *, /
// return - your password is strong

function processUsername(username){
    return username.toLowerCase().trim();
}
function processEmail(email){
    return email.toLowerCase().split("@");
}
function processPassword(password){

    if (password.includes("*") && password.includes("/") && password.includes("@") && password.length>8)
        return "Your password is strong";
    else
        return "Your password is weak";
}
function processDetails(username="username", email="email@example.com", password="default"){

    console.log(processUsername(username));
    console.log(processEmail(email));
    console.log(processPassword(password));
}

processDetails("  My Name", "mymail@example.com","/*@aksdbakdsba")

// --------------------------------------------------------

// Task - create object from user input

function createObject(username, email, password){
    let obj = {
        username:username,
        email:email,
        password:password
    }
    return obj;
}
console.log(createObject("ashutosh12505", "ashutosh12505@gmail.com", "myPassword"));
