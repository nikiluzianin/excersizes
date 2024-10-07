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


function orderInformation(customerName, pancakeDetails, deliveryOption, totalPrice) {
    this.customerName = customerName;
    this.pancakeDetails = pancakeDetails;
    this.deliveryOption = deliveryOption;
    this.totalPrice = totalPrice;

    this.getOrderInformationCustomerNameString = getOrderInformationCustomerNameString;
    this.getOrderInformationPancakeTypeString = getOrderInformationPancakeTypeString;
    this.getOrderInfromationToppingsAndExtrasString = getOrderInfromationToppingsAndExtrasString;
    this.getOrderInformationDeliveryString = getOrderInformationDeliveryString;
    this.getOrderInformationTotalPriceString = getOrderInformationTotalPriceString;
    this.getOrderInformationString = getOrderInformationString;
}


let currentOrder;
let allOrders = [];
let allAdditionalSelectors = [nutsToppingSelector, bananasToppingSelector, syrupToppingSelector, creamExtraSelector, iceExtraSelector];
let totalPrice = 5;

function getOrderInformationCustomerNameString() {
    return this.customerName;
}

function getOrderInformationPancakeTypeString() {
    switch (this.pancakeDetails[0]) {
        case ("5"): return "Classic";
        case ("6"): return "Chocolate";
        case ("7"): return "Blueberry";
    };
}

function getOrderInfromationToppingsAndExtrasString() {

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
    return infromationString;
}

function getOrderInformationDeliveryString() {
    switch (this.deliveryOption) {
        case ("eatIn"): return "Eat In";
        case ("pickUp"): return "Pick Up";
        case ("delivery"): return "Delivery";
    }
}

function getOrderInformationTotalPriceString() {
    return ("$" + this.totalPrice);
}

function getOrderInformationString() {
    let infromationString = "Customer Name: " + orderInQuestion.getOrderInformationCustomerNameString() + " \nPancake type: " +
        orderInQuestion.getOrderInformationPancakeTypeString() + "\nToppings and Extras: " + orderInQuestion.getOrderInfromationToppingsAndExtrasString() +
        "\nDelivery option: " + orderInQuestion.getOrderInformationDeliveryString() +
        "\nTotal price: " + orderInQuestion.getOrderInformationTotalPriceString();

    return infromationString;
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

    //totalPriceFields[0].classList.toggle("shake");

    updateOrderData();

}

const cleanUpInfoDiv = () => {

    while (orderInfromationSpace.firstChild) {
        orderInfromationSpace.removeChild(orderInfromationSpace.firstChild);
    }

}

const createOrder = () => {
    currentOrder = new orderInformation;
    updateOrderData();
}

const printOrderInformationIntoDiv = (orderInQuestion, divCreated) => {

    let firstColumn = ["Customer Name: ", "Pancake Type: ", "Toppings and Extras", "Delivery: ", "Total Price: "];
    let secondColumn = [orderInQuestion.getOrderInformationCustomerNameString(),
    orderInQuestion.getOrderInformationPancakeTypeString(),
    orderInQuestion.getOrderInfromationToppingsAndExtrasString(),
    orderInQuestion.getOrderInformationDeliveryString(),
    orderInQuestion.getOrderInformationTotalPriceString()];

    let tableRow, tableCell;

    for (let i = 0; i < firstColumn.length; i++) {
        tableRow = document.createElement('tr');
        tableCell = document.createElement('td');
        tableCell.textContent = firstColumn[i];
        tableRow.appendChild(tableCell);

        tableCell = document.createElement('td');
        tableCell.textContent = secondColumn[i];
        tableRow.appendChild(tableCell);
        divCreated.appendChild(tableRow);
    }
    return divCreated;
}

const orderSummary = () => {

    cleanUpInfoDiv();

    let overallTable = document.createElement('table');

    let orderInformationOutput = printOrderInformationIntoDiv(currentOrder, document.createElement('tbody'));
    overallTable.appendChild(orderInformationOutput);
    orderInfromationSpace.appendChild(overallTable);
}

const saveOrder = () => {

    allOrders.push(currentOrder);
    createOrder();
}

const showAllOrders = () => {
    //for (let order in allOrders) 
    console.log("show");
}


wholeForm.addEventListener('input', updatePrice);

document.querySelector('#orderSummary').addEventListener('click', orderSummary);
document.querySelector('#saveOrder').addEventListener('click', saveOrder);
document.querySelector('#allOrders').addEventListener('click', showAllOrders);

createOrder();