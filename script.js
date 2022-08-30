// All input Variables
let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")



// Check for Product List in Local Storage
let prodList = [];
if (localStorage.getItem("products") != null) {
    prodList = JSON.parse(localStorage.getItem("products"))
    console.log("found local storage");
}else {
    console.log("no local storage found");
}

// Calculate Total Price
function getTotalPrice(){
    if (price.value != "") {
        total.innerHTML = +price.value + +taxes.value + +ads.value - +discount.value;
        total.style.backgroundColor = "rgb(56, 146, 56)"
    }else {
        total.style.backgroundColor = "rgb(75, 5, 5)";
        total.innerHTML = ""
    }
}






// Create Product
function createProd() {
    let thisProd = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    prodList.push(thisProd);
    saveProd();
    clearInput();
}









// Save Data in LocalStorage
function saveProd(){
localStorage.setItem("products", JSON.stringify(prodList));
console.log("done!");
}




// Clear Inputs after creating a product
function clearInput(){
title.value = "";
price.value = "";
taxes.value = "";
ads.value = "";
discount.value = "";
total.innerHTML = "";
count.value = "";
category.value = "";
}




// Search
// Delete a product
// Update a product