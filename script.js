// All input Variables
let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")



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
// Save Data in LocalStorage
// Clear Inputs after creating a product
// Search
// Delete a product
// Update a product