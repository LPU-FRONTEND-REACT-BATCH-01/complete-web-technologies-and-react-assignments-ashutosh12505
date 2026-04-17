async function fetchProjectData() {
    try{
        let response = await fetch("https://dummyjson.com/products/search?q=phone");
        if(response.ok){
            let data = await response.json();
            // console.log(data);
            
            // displayData(data.products);
            displayData(data.products);

            // console.log(data.products[0]);
            console.log("Data being displayed on UI");

        }else{
            console.log("There is an HTTP error !!");
        }

    }catch(errorMsg){
        console.log(errorMsg)
    }
}

function displayData(data){
    data.map((eachProduct)=>{
        let tbody = document.querySelector(".table-body");
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = eachProduct.id;

        let td2 = document.createElement("td");
        td2.textContent = eachProduct.title;

        let td3 = document.createElement("td");
        td3.textContent = eachProduct.category;

        let td4 = document.createElement("td");
        td4.textContent = eachProduct.price;

        let td5 = document.createElement("td");
        td5.textContent = eachProduct.rating;

        let td6 = document.createElement("td");
        td6.textContent = eachProduct.brand;

        let td7 = document.createElement("td");
        td7.textContent = eachProduct.shippingInformation;

        let td8 = document.createElement("td");
        td8.textContent = eachProduct.availabilityStatus;

        let td9 = document.createElement("td");
        let img = document.createElement("img");
        img.src = eachProduct.images?.[0] || eachProduct.thumbnail;
        img.width = 50;
        img.height = 40;
        td9.appendChild(img);

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
        tbody.append(tr);
    })
}

fetchProjectData();