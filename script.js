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
if (localStorage.getItem("products")){
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
    showData()
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



// Read and Show Data In Table (output)
function showData() {
    let tbody = document.getElementById("tbody");
    let table = ``;
    for (let i = 0; i < prodList.length; i++) {
        table +=`           <tr>
                        <td>${i}</td>
                        <td>${prodList[i].title}</td>
                        <td>${prodList[i].price}</td>
                        <td>${prodList[i].taxes}</td>
                        <td>${prodList[i].ads}</td>
                        <td>${prodList[i].discount}</td>
                        <td>${prodList[i].total}</td>
                        <td>${prodList[i].category}</td>
                        <td><input onclick="updateProd(${i})" type="button" value="Update"></td>
                        <td><input onclick="deleteProd(${i})" type="button" value="Delete"></td>
                    </tr>`
        
    }
    tbody.innerHTML = table;
    
    let deleteAllBtn = document.getElementById("deleteAll");
    if (prodList.length < 1) {
        deleteAllBtn.style.display = "none";
    }else deleteAllBtn.style.display = "block";
}








// Delete a product
function deleteProd(i) {
    prodList.splice(i,1);
    localStorage.products = JSON.stringify(prodList);
    showData();
}



// Update a product
function updateProd(i) {
    
}

// Delete All
function deleteAll() {
    prodList = [];
    localStorage.products = JSON.stringify(prodList);
    showData();
}


// Search

showData();