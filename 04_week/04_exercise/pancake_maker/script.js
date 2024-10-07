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

/*const priceAnimation = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
];*/

let currentOrder;
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


const updateOrderData = () => {
    let pancakeDetails = [typeSelector.value];
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
    deliveryOptions.forEach((deliveryOption) => deliveryOption.checked = false);
    cleanUpInfoDiv();

}

const createNewOrder = () => {

    resetForm();
    currentOrder = new orderInformation;
    updatePrice();
}

const printOrdersInformationIntoDiv = (ordersInQuestion) => {

    let table = document.createElement('table');
    const firstRow = ["Order Number", "Customer Name ", "Pancake Type ", "Toppings and Extras", "Delivery ", "Total Price "];
    const tableRow = table.insertRow(-1);
    firstRow.forEach((item) => tableRow.insertCell(-1).textContent = item);

    ordersInQuestion.forEach((orderInQuestion) => {
        const tableRow = table.insertRow(-1);
        tableRow.insertCell(-1).textContent = orderInQuestion?.orderNumber || "pending";
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInformationCustomerNameString();
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInformationPancakeTypeString();
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInfromationToppingsAndExtrasString();
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInformationDeliveryString();
        tableRow.insertCell(-1).textContent = orderInQuestion.getOrderInformationTotalPriceString();
    });

    return table;
}


const orderSummary = () => {

    cleanUpInfoDiv();
    orderInfromationSpace.appendChild(printOrdersInformationIntoDiv([currentOrder]));
}

const saveOrder = () => {
    const { customerName, pancakeDetails, deliveryOption, totalPrice } = currentOrder;
    allOrders.push(new SavedOrder(customerName, pancakeDetails, deliveryOption, totalPrice, allOrders.length + 1));

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