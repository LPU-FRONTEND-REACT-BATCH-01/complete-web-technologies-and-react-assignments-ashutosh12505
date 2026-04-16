// async function fetchData() {
//     try{
//         let response = await fetch("https://dummyjson.com/products?limit=100");
//         if(response.ok){
//             let data = await response.json();
            
//             // arrangeProducts(data.products);
//             // console.log(data.products[0]);
//             // fun2(data.products);
//             // console.log(data)
//             arrangeProducts(data.products)
//             // console.log("Data being displayed on UI");

//         }else{
//             console.log("There is an HTTP error !!");
//         }

//     }catch(errorMsg){ 
//         console.log(errorMsg)
//     }
// }

// function arrangeProducts(products){
//     let arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = []
//     products.map((eachProduct)=>{
//         // eachProduct.title
//         // eachProduct.price
//         // eachProduct.category

//         if(eachProduct.price>5)
//             arr1.push(eachProduct)
//         if(eachProduct.price>10)
//             arr2.push(eachProduct)

//         arr3.push(eachProduct)
//         arr4.push(eachProduct)

//         if(eachProduct.category=='mens-shirts'){
//             arr5.push(eachProduct)
//         }else if(eachProduct.category=='beauty'){
//             arr6.push(eachProduct)
//         }

//     })

//     // A → Z
//     arr1 = arr1.sort((a, b) => a.title.localeCompare(b.title));

//     // Z → A
//     arr2 = arr2.sort((a, b) => b.title.localeCompare(a.title));

//     displayProducts(arr1, arr2, arr3, arr4, arr5, arr6);
// }

// function displayProducts(arr1, arr2, arr3, arr4, arr5, arr6){
//     let div1 = document.querySelector(".div1")
//     let ul1 = document.createElement("ul")
//     arr1.map((each)=>{
//         let li = document.createElement("li")
//         li.textContent = each.title+" "+each.price+" "+each.category
//         ul1.append(li);
//     })
//     // div1.append(ul1);


//     let div2 = document.querySelector(".div2")
//     let ul2 = document.createElement("ul")
//     arr2.map((each)=>{
//         let li = document.createElement("li")
//         li.textContent = each.title+" "+each.price+" "+each.category
//         ul2.append(li);
//     })
//     // div2.append(ul2);


//     let div3 = document.querySelector(".div3")
//     let ul3 = document.createElement("ul")
//     arr3.map((each)=>{
//         let li = document.createElement("li")
//         li.textContent = each.title+" "+each.price+" "+each.category
//         ul3.append(li);
//     })
//     // div3.append(ul3);


//     let div4 = document.querySelector(".div4")
//     let ul4 = document.createElement("ul")
//     arr4.map((each)=>{
//         let li = document.createElement("li")
//         li.textContent = each.title+" "+each.price+" "+each.category
//         ul4.append(li);
//     })
//     // div4.append(ul4);


//     let div5 = document.querySelector(".div5")
//     let ul5 = document.createElement("ul")
//     arr5.map((each)=>{
//         let li = document.createElement("li")
//         li.textContent = each.title+" "+each.price+" "+each.category
//         ul5.append(li);
//     })
//     // div5.append(ul5);


//     let div6 = document.querySelector(".div6")
//     let ul6 = document.createElement("ul")
//     arr6.map((each)=>{
//         let li = document.createElement("li")
//         li.textContent = each.title+" "+each.price+" "+each.category
//         ul6.append(li);
//     })

//     div1.append(ul1);
//     div2.append(ul2);
//     div3.append(ul3);
//     div4.append(ul4);
//     div5.append(ul5);
//     div6.append(ul6);
// }

// fetchData();
//---------------------------------------------------------------------------------------
// async function fetchData() {
//     try{
//         let response = await fetch("https://dummyjson.com/products?limit=100");
//         if(response.ok){
//             let data = await response.json();
            
//             // arrangeProducts(data.products);
//             // console.log(data.products[0]);
//             // fun2(data.products);
//             // console.log(data)
//             arrangeProducts(data.products)
//             // console.log("Data being displayed on UI");

//         }else{
//             console.log("There is an HTTP error !!");
//         }

//     }catch(errorMsg){ 
//         console.log(errorMsg)
//     }
// }

// function arrangeProducts(products){
//     let arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = []

//     products.forEach((eachProduct)=>{
//         // eachProduct.title
//         // eachProduct.price
//         // eachProduct.category

//         if(eachProduct.price > 5)
//             arr1.push(eachProduct)

//         if(eachProduct.price > 10)
//             arr2.push(eachProduct)

//         arr3.push(eachProduct)
//         arr4.push(eachProduct)

//         if(eachProduct.category == 'mens-shirts'){
//             arr5.push(eachProduct)
//         }else if(eachProduct.category == 'beauty'){
//             arr6.push(eachProduct)
//         }
//     })

//     // A → Z
//     arr1.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

//     // Z → A
//     arr2.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));

//     console.log("A-Z:", arr1.map(p => p.title));
//     console.log("Z-A:", arr2.map(p => p.title));

//     displayProducts(arr1, arr2, arr3, arr4, arr5, arr6);
// }

// function displayProducts(arr1, arr2, arr3, arr4, arr5, arr6){

//     function render(divClass, arr){
//         let div = document.querySelector(divClass);
//         div.innerHTML = "<h2>New Heading</h2>";

//         // let ul = document.createElement("ul");

//         let table = document.createElement("table");
        
        
//         arr.forEach((each)=>{
//             // let li = document.createElement("li");
//             // li.textContent = each.title + " $" + each.price + " " + each.category;
//             // ul.append(li);
            
//             let tr = document.createElement("tr");
//             let td1 = document.createElement("td")
//             td1.textContent = each.title;
//             let td2 = document.createElement("td")
//             td2.textContent = '$'+each.price;
//             let td3 = document.createElement("td")
//             td3.textContent = each.category;

//             tr.append(td1, td2, td3);
//             table.append(tr);
//         });

//         // div.append(ul);
//         // table.append(tr);
//         div.append(table);
//     }

//     let div1 = document.querySelector(".div1")
//     let div2 = document.querySelector(".div2")
//     let div3 = document.querySelector(".div3")
//     let div4 = document.querySelector(".div4")
//     let div5 = document.querySelector(".div5")
//     let div6 = document.querySelector(".div6")

//     render(".div1", arr1);
//     render(".div2", arr2);
//     render(".div3", arr3);
//     render(".div4", arr4);
//     render(".div5", arr5);
//     render(".div6", arr6);
// }

// fetchData();
// --------------------------------------------------------------------------------

async function fetchData() {
    try{
        let response = await fetch("https://dummyjson.com/products?limit=100");
        if(response.ok){
            let data = await response.json();
            
            // arrangeProducts(data.products);
            // console.log(data.products[0]);
            // fun2(data.products);
            // console.log(data)
            arrangeProducts(data.products)
            // console.log("Data being displayed on UI");

        }else{
            console.log("There is an HTTP error !!");
        }

    }catch(errorMsg){ 
        console.log(errorMsg)
    }
}

function arrangeProducts(products){
    let arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = []

    products.forEach((eachProduct)=>{
        // eachProduct.title
        // eachProduct.price
        // eachProduct.category

        if(eachProduct.price > 5)
            arr1.push(eachProduct)

        if(eachProduct.price > 10)
            arr2.push(eachProduct)

        arr3.push(eachProduct)
        arr4.push(eachProduct)

        if(eachProduct.category == 'mens-shirts'){
            arr5.push(eachProduct)
        }else if(eachProduct.category == 'beauty'){
            arr6.push(eachProduct)
        }
    })

    // A → Z
    arr3.sort((a, b) => a.title.localeCompare(b.title));

    // Z → A
    arr4.sort((a, b) => b.title.localeCompare(a.title));

    // console.log("A-Z all:", arr3.map(p => p.title));
    // console.log("Z-A all:", arr4.map(p => p.title));

    displayProducts(arr1, arr2, arr3, arr4, arr5, arr6);
}

function displayProducts(arr1, arr2, arr3, arr4, arr5, arr6){

    function render(divClass, arr, heading){
        let div = document.querySelector(divClass);
        div.innerHTML = `<h2>${heading}</h2>`;

        let table = document.createElement("table");
        
        arr.forEach((each)=>{
            let tr = document.createElement("tr");

            let td1 = document.createElement("td")
            td1.textContent = each.title;

            let td2 = document.createElement("td")
            td2.textContent = '$' + each.price;

            let td3 = document.createElement("td")
            td3.textContent = each.category;

            tr.append(td1, td2, td3);
            table.append(tr);
        });

        div.append(table);
    }

    render(".div1", arr1, "Price > 5");
    render(".div2", arr2, "Price > 10");
    render(".div3", arr3, "All Products (A → Z)");
    render(".div4", arr4, "All Products (Z → A)");
    render(".div5", arr5, "Mens Shirts");
    render(".div6", arr6, "Beauty");
}

fetchData();