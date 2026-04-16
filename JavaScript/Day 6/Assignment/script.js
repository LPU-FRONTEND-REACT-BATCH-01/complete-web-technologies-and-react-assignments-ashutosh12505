async function fetchProjectData() {
    try{
        let response = await fetch("https://dummyjson.com/products/search?q=phone");
        if(response.ok){
            let data = await response.json();
            // console.log(data);
            
            // displayData(data.products);
            console.log("This is executiom of 1st fun");
            
            displayProducts(data.products);
            console.log("This is executiom of 2nd fun");
            displayInCart(data.products);

            // console.log(data.products[0]);
            console.log("Data being displayed on UI");

        }else{
            console.log("There is an HTTP error !!");
        }

    }catch(errorMsg){ 
        console.log(errorMsg)
    }
}

function displayProducts(data){


    // all-cards:
    // item-card:
    //     item-img
    //     item-details
    //     add-to-cart-button


    data.map((eachProduct)=>{

        let allCards = document.querySelector(".all-cards");
        let eachCard = document.createElement("div");
        eachCard.classList.add("item-card");


        let imageDiv = document.createElement("div");
            imageDiv.classList.add("item-img");
            let img = document.createElement("img");
            img.src = eachProduct.images?.[0] || eachProduct.thumbnail;
            img.classList.add("item-card-img")

        imageDiv.append(img)
        
        let itemDetails = document.createElement("div");
            itemDetails.classList.add("item-details");

            let title = document.createElement("p");
            title.textContent = eachProduct.title;

            let price = document.createElement("p");
            price.textContent = '\u20B9 '+eachProduct.price;

            let rating = document.createElement("p");
            rating.textContent = '⭐'+eachProduct.rating;

            let brand = document.createElement("p");
            brand.textContent = 'Brand: '+eachProduct.brand;

            let category = document.createElement("p");
            category.textContent = 'Category: '+eachProduct.category;

        itemDetails.append(title, price, rating, brand, category)

        let cartButton = document.createElement("button")
            cartButton.innerText = 'Add to Cart'
            cartButton.classList.add("add-to-cart-button");

        cartButton.addEventListener("click", () => {
            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push(eachProduct);
            localStorage.setItem("cart", JSON.stringify(cartItems));

            console.log("Item added:", eachProduct);
        });

        eachCard.append(imageDiv, itemDetails, cartButton);
        allCards.append(eachCard);

        eachCard.append(imageDiv, itemDetails, cartButton)
        allCards.append(eachCard)
    })
}


// --------------------------------------------------
// for cart page
let cartContainer = document.querySelector(".cart-items");

function displayInCart(data){
    
    data.map((eachProduct)=>{
        
        console.log(data);

        let productBanner = document.createElement("div");
        productBanner.classList.add("product-banner");

        let imageAndName = document.createElement("div");
        imageAndName.classList.add("image-and-name");

            let img = document.createElement("img")
            img.src = eachProduct.images?.[0] || eachProduct.thumbnail;
            img.width =  40;
            img.height = 40;

            let title = document.createElement("p")
            title.textContent = eachProduct.title;

        imageAndName.append(img, title)
        let ratingAndPrice = document.createElement("div")
        ratingAndPrice.classList.add("rating-and-price")

            let category = document.createElement("p")
            category.textContent = eachProduct.category;
            category.classList.add("cart-category")

            let rating = document.createElement("p")
            rating.textContent = eachProduct.rating
            rating.classList.add("cart-rating")

            let price = document.createElement("p")
            price.textContent = eachProduct.price
            price.classList.add("cart-price")

        ratingAndPrice.append(category, rating, price)
        productBanner.append(imageAndName, ratingAndPrice);
        cartContainer.append(productBanner);
    })
}


// function getCartItems(){
//     let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

//     console.log("Cart Items:", cartItems);

//     cartItems.forEach((item, index) => {
//         console.log(`Item ${index + 1}:`, item);
//     });
// }

// localStorage.clear();

console.log("Start");

fetchProjectData();