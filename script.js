let itemNames = JSON.parse(localStorage.getItem('itemNames')) || [];
let itemPrices = JSON.parse(localStorage.getItem('itemPrices')) || [];


function addItem(itemName, itemPrice) {
    let itemText = document.getElementById(itemName).textContent;
    let priceText = document.getElementById(itemPrice).textContent;

    itemNames.push(itemText);
    itemPrices.push(priceText);

    localStorage.setItem('itemNames', JSON.stringify(itemNames));
    localStorage.setItem('itemPrices', JSON.stringify(itemPrices));
}


function displayCheckout() {
    let listItem = document.getElementById("item-list");
    let listPrice = document.getElementById("price-list");

    itemNames.forEach(item => {
        let p = document.createElement("p");
        p.textContent = item;
        listItem.appendChild(p);
    });

    itemPrices.forEach(price => {
        let p = document.createElement("p");
        p.textContent = price;
        listPrice.appendChild(p);
    });
}

function clearItems() {
    itemNames = [];
    itemPrices = [];

    localStorage.removeItem('itemNames');
    localStorage.removeItem('itemPrices');

    let divItem = document.getElementById("item-list");
    let divPrice = document.getElementById("price-list");
    divItem.innerHTML = ""; 
    divPrice.innerHTML = ""; 

    displayCheckout();
}
