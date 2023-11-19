document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.getElementById("items-container");
    const billList = document.getElementById("bill-list");
    const totalSpan = document.getElementById("total");

    const items = [
        
    ];

    items.forEach(item => {
        const container = document.createElement("div");
        container.className = "item-container";

        const button = document.createElement("button");
        button.textContent = `Add ${item.name} to Bill`;

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = 1;
        quantityInput.value = 1;

        button.addEventListener("click", () => addToBill(item, quantityInput.value));

        container.appendChild(button);
        container.appendChild(quantityInput);
        itemsContainer.appendChild(container);
    });

    function addToBill(item, quantity) {
        const listItem = document.createElement("li");
        const totalItemPrice = (item.price * quantity).toFixed(2);
        listItem.textContent = `${quantity} x ${item.name} - rs:${totalItemPrice}`;
        billList.appendChild(listItem);

        const currentTotal = parseFloat(tcotalSpan.textContent);
        const newTotal = currentTotal + parseFloat(totalItemPrice);
        totalSpan.textContent = newTotal.toFixed(2);
    }

    
    window.addCustomItem = function () {
        const itemNameInput = document.getElementById("itemName");
        const itemPriceInput = document.getElementById("itemPrice");

        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
            const customItem = { name: itemName, price: itemPrice };

            const container = document.createElement("div");
            container.className = "item-container";

            const button = document.createElement("button");
            button.textContent = `Number of ${customItem.name} to Bill`;//add

            const quantityInput = document.createElement("input");
            quantityInput.type = "number";
            quantityInput.min = 1;
            quantityInput.value = 1;

            button.addEventListener("click", () => addToBill(customItem, quantityInput.value));

            container.appendChild(button);
            container.appendChild(quantityInput);
            itemsContainer.appendChild(container);

            itemNameInput.value = "";
            itemPriceInput.value = "";
        } else {
            alert("Please enter valid item name and price.");
        }
    };
});
