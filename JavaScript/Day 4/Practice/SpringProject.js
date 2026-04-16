// async function fetchData() {
//     // let response = fetch("https://dummyjson.com/products"); // promise, because we are not waiting
//     let response = await fetch("https://dummyjson.com/products");
//     console.log(response);
// }
// fetchData(); // response object

// -------------------------------------

// async function fetchData2() {

//     let response = await fetch("https://dummyjson.com/products");
//     let data =  response.json();
//     console.log(data);
// }
// fetchData2(); // json format, but pending promise because we are not waiting

// -------------------------------------

// async function fetchData2() {

//     let response = await fetch("https://dummyjson.com/products");
//     let data =  await response.json();
//     console.log(data);
// }
// fetchData2(); // proper json format

// -------------------------------------

// async function fetchData() {

//     try{
//         let response = await fetch("https://dummyjson.com/products_random");
//         let data =  await response.json();
//         console.log(data);

//     }catch(errorMsg){
//         console.log("Error Occurred")
//     }
// }

// fetchData(); // our custom error message


// -------------------------------------

// if we try to convert to json and response is not present, it will cause a javascript error and not a HTTP error. so check if response is ok or not prior to converting to json

// async function fetchData() {

//     try{
//         let response = await fetch("https://dummyjson.com/products_random");
//         // console.log(response);

//         if(response.ok){
//             let data = response.json();
//             console.log(data);

//         }else{
//             // if the response itself is not ok
//             console.log("There is an HTTP error !!");
//         }

//     }catch(errorMsg){
//         console.log("JavaScript Error")
//     }
// }

// fetchData();


// -------------------------------------

async function fetchProjectData() {
    try{
        let response = await fetch("http://localhost:8083/mentors");
        // console.log(response);
    
        if(response.ok){
            let data = await response.json();
            // console.log(data);

            // displayData(data);
            console.log("Data being displayed on UI");

        }else{
            console.log("There is an HTTP error !!");
        }

    }catch(errorMsg){
        console.log("JavaScript Error")
    }
}

function displayData(data){
    data.map((eachMentor)=>{
        let tbody = document.querySelector(".table-body");
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = eachMentor.id;

        let td2 = document.createElement("td");
        td2.textContent = eachMentor.userId;

        let td3 = document.createElement("td");
        td3.textContent = eachMentor.expertise;

        let td4 = document.createElement("td");
        td4.textContent = eachMentor.bio;

        let td5 = document.createElement("td");
        td5.textContent = eachMentor.experience;

        let td6 = document.createElement("td");
        td6.textContent = eachMentor.rating;

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    })
}
fetchProjectData();
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------

// fetch("http://localhost:8083/mentors")
//   .then(response => response.json())
//   .then(data => {
//       console.log(data); // full mentors list
//   })
//   .catch(error => {
//       console.error("Error:", error);
//   });

// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
