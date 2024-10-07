// const textField1 = document.querySelector('#textField1');

const wholeForm = document.querySelector('.container'); // the whole page to listen for events

const totalPriceFields = document.querySelectorAll('#totalPrice'); // all the elements that feature total price

const typeSelector = document.querySelector('#type'); // selecting the type of pancakes

const nutsToppingSelector = document.querySelector('#nuts'); // toppings
const bananasToppingSelector = document.querySelector('#bananas');
const syrupToppingSelector = document.querySelector('#syrup');

const creamExtraSelector = document.querySelector('#whippedCream'); //extras
const iceExtraSelector = document.querySelector('#iceCream');

const customerName = document.querySelector('#customerName');

const deliveryOptions = document.getElementsByName('deliveryOptions');

const orderInfromationSpace = document.querySelector('#orderInformation');

const priceBanner = document.querySelector(".price-banner");


let currentOrder;
let ordersCreated = 0;
let allOrders = [];
let allAdditionalSelectors = [nutsToppingSelector, bananasToppingSelector, syrupToppingSelector, creamExtraSelector, iceExtraSelector];
let totalPrice = 5;

class orderInformation {
    constructor(customerName, pancakeDetails, deliveryOption, totalPrice) {
        this.customerName = customerName;
        this.pancakeDetails = pancakeDetails;
        this.deliveryOption = deliveryOption;
        this.totalPrice = totalPrice;
    }

    getOrderInformationCustomerNameString() {
        return this.customerName;
    }

    getOrderInformationPancakeTypeString() {
        switch (this.pancakeDetails[0]) {
            case ("5"): return "Classic";
            case ("6"): return "Chocolate";
            case ("7"): return "Blueberry";
        };
    }

    getOrderInfromationToppingsAndExtrasString() {

        let infromationString = "";

        for (let selector of this.pancakeDetails.slice(1)) {
            switch (selector) {
                case ("nuts"): {
                    infromationString += "\nNuts";
                    break;
                }
                case ("bananas"): {
                    infromationString += "\nBananas";
                    break;
                }
                case ("syrup"): {
                    infromationString += "\nSyrup";
                    break;
                }
                case ("whippedCream"): {
                    infromationString += "\nWhipped Cream";
                    break;
                }
                case ("iceCream"): {
                    infromationString += "\nIce Cream";
                    break;
                }
            }
        }
        return infromationString.trim();
    }

    getOrderInformationDeliveryString() {
        switch (this.deliveryOption) {
            case ("eatIn"): return "Eat In";
            case ("pickUp"): return "Pick Up";
            case ("delivery"): return "Delivery";
        }
    }

    getOrderInformationTotalPriceString() {
        return ("$" + this.totalPrice);
    }

    getOrderInformationString() {
        let infromationString = "Customer Name: " + orderInQuestion.getOrderInformationCustomerNameString() + " \nPancake type: " +
            orderInQuestion.getOrderInformationPancakeTypeString() + "\nToppings and Extras: " + orderInQuestion.getOrderInfromationToppingsAndExtrasString() +
            "\nDelivery option: " + orderInQuestion.getOrderInformationDeliveryString() +
            "\nTotal price: " + orderInQuestion.getOrderInformationTotalPriceString();

        return infromationString;
    }
}

class SavedOrder extends orderInformation {
    constructor(customerName, pancakeDetails, deliveryOption, totalPrice, orderNumber) {
        super(customerName, pancakeDetails, deliveryOption, totalPrice);
        this.orderNumber = orderNumber;
    }

}

const changePancakePic = (number) =>
    document.querySelector("#main-picture").src =
    (number == 0) ? "assets/pexels-ash-craig-122861-376464.jpg" :
        (number == 1) ? "assets/pexels-gabby-k-7144669.jpg" : "assets/pexels-pixabay-236804.jpg";


const updateOrderData = () => {
    let pancakeDetails = [typeSelector.value];
    changePancakePic(typeSelector.selectedIndex);

    for (let selector of allAdditionalSelectors) (selector.checked) && pancakeDetails.push(selector.id);

    let chosenDeliveryOption;
    for (let deliveryOption of deliveryOptions) (deliveryOption.checked) && (chosenDeliveryOption = deliveryOption.id);

    currentOrder.customerName = customerName.value;
    currentOrder.pancakeDetails = pancakeDetails;
    currentOrder.deliveryOption = chosenDeliveryOption;
    currentOrder.totalPrice = totalPrice;

    priceBanner.animate(
        [
            { transform: 'scale(1)' },
            { transform: 'scale(2)' },
            { transform: 'scale(1)' },
        ],
        {
            duration: 100,
            iterations: 1,
        }
    );
}

const updatePrice = () => {
    totalPrice = parseInt(typeSelector.value, 10); // getting the base price

    for (let selector of allAdditionalSelectors) (selector.checked) && (totalPrice += parseInt(selector.value, 10));  // loop through all the selectors

    for (let deliveryOption of deliveryOptions) (deliveryOption.checked) && (totalPrice += parseInt(deliveryOption.value, 10));

    for (let totalPriceField of totalPriceFields) totalPriceField.textContent = '$' + totalPrice;

    updateOrderData();

}

const cleanUpInfoDiv = () => {

    while (orderInfromationSpace.firstChild) {
        orderInfromationSpace.removeChild(orderInfromationSpace.firstChild);
    }

}

const resetForm = () => {
    typeSelector.selectedIndex = 0;
    nutsToppingSelector.checked = false;
    bananasToppingSelector.checked = false;
    syrupToppingSelector.checked = false;
    creamExtraSelector.checked = false;
    iceExtraSelector.checked = false;
    customerName.value = "";
    deliveryOptions[0].checked = true;
    cleanUpInfoDiv();

}

const createNewOrder = () => {

    resetForm();
    currentOrder = new orderInformation;
    updatePrice();
}

const completeOrder = (index) => {
    allOrders.splice(index, 1);
    showAllOrders();
}

const editOrder = (index) => {
    // console.log(document.querySelector('#saveOrder').textContent);// = "asd";
    document.querySelector('#saveOrder').textContent = "Save update";
}

const printOrdersInformationIntoDiv = (ordersInQuestion) => {

    let table = document.createElement('table');
    const firstRow = ["Order Number", "Customer Name ", "Pancake Type ", "Toppings and Extras", "Delivery ", "Total Price ", "Actions"];
    const tableRow = table.insertRow(-1);
    firstRow.forEach((item) => tableRow.insertCell(-1).textContent = item);

    ordersInQuestion.forEach((orderInQuestion) => {
        const tableRow = table.insertRow(-1);
        const orderNumber = orderInQuestion?.orderNumber || "pending";
        tableRow.insertCell(-1).textContent = orderNumber;
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInformationCustomerNameString();
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInformationPancakeTypeString();
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInfromationToppingsAndExtrasString();
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInformationDeliveryString();
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInformationTotalPriceString();

        if (orderNumber != "pending") {
            const buttonTableCell = tableRow.insertCell(-1);
            const completeButton = document.createElement('input');
            buttonTableCell.appendChild(completeButton);

            completeButton.type = "button";
            completeButton.value = "Complete";
            completeButton.id = "complete-button";
            completeButton.addEventListener("click", (ev) => {
                completeOrder(tableRow.rowIndex - 1);
            });

            const editButton = document.createElement('input');
            buttonTableCell.appendChild(editButton);

            editButton.type = "button";
            editButton.value = "Edit";
            editButton.id = "edit-button";
            editButton.addEventListener("click", (ev) => {
                editOrder(tableRow.rowIndex - 1);
            });
        }

    });

    return table;
}


const orderSummary = () => {

    cleanUpInfoDiv();
    orderInfromationSpace.appendChild(printOrdersInformationIntoDiv([currentOrder]));
}

const saveOrder = () => {
    const { customerName, pancakeDetails, deliveryOption, totalPrice } = currentOrder;



    allOrders.push(new SavedOrder(customerName, pancakeDetails, deliveryOption, totalPrice, ++ordersCreated));

    createNewOrder();
}

const showAllOrders = () => {
    cleanUpInfoDiv();
    orderInfromationSpace.appendChild(printOrdersInformationIntoDiv([...allOrders, currentOrder]));
}


wholeForm.addEventListener('input', updatePrice);

document.querySelector('#orderSummary').addEventListener('click', orderSummary);
document.querySelector('#saveOrder').addEventListener('click', saveOrder);
document.querySelector('#allOrders').addEventListener('click', showAllOrders);

createNewOrder();