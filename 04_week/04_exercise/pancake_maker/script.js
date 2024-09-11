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

const orderSummaryButton = document.querySelector('#orderSummary'); // all the buttons
const saveOrderButton = document.querySelector('#saveOrder');
const allOrdersButton = document.querySelector('#allOrders');

const orderInfromationSpace = document.querySelector('#orderInformation');




function orderInformation(customerName, pancakeDetails, deliveryOption, totalPrice) {
    this.customerName = customerName;
    this.pancakeDetails = pancakeDetails;
    this.deliveryOption = deliveryOption;
    this.totalPrice = totalPrice;
}

let currentOrder;
let allOrders = [];
let allAdditionalSelectors = [nutsToppingSelector, bananasToppingSelector, syrupToppingSelector, creamExtraSelector, iceExtraSelector];
let totalPrice = 5;

const updateOrderData = () => {
    let pancakeDetails = [typeSelector.value];
    for (let selector of allAdditionalSelectors) (selector.checked) && pancakeDetails.push(selector.id);

    let chosenDeliveryOption;
    for (let deliveryOption of deliveryOptions) (deliveryOption.checked) && (chosenDeliveryOption = deliveryOption.id);

    currentOrder.customerName = customerName.value;
    currentOrder.pancakeDetails = pancakeDetails;
    currentOrder.deliveryOption = chosenDeliveryOption;
    currentOrder.totalPrice = totalPrice;
}

const createOrder = () => {
    currentOrder = new orderInformation;
    updateOrderData();
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

const getOrderInformationCustomerNameString = (orderInQuestion) => orderInQuestion.customerName;

const getOrderInformationPancakeTypeString = (orderInQuestion) => {
    switch (orderInQuestion.pancakeDetails[0]) {
        case ("5"): return "Classic";
        case ("6"): return "Chocolate";
        case ("7"): return "Blueberry";
    };
}

const getOrderInfromationToppingsAndExtrasString = (orderInQuestion) => {

    let infromationString = "";

    for (let selector of orderInQuestion.pancakeDetails.slice(1)) {
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

const getOrderInformationDeliveryString = (orderInQuestion) => {
    switch (orderInQuestion.deliveryOption) {
        case ("eatIn"): return "Eat In";
        case ("pickUp"): return "Pick Up";
        case ("delivery"): return "Delivery";
    }
}

const getOrderInformationTotalPriceString = (orderInQuestion) => ("$" + orderInQuestion.totalPrice);

const getOrderInformationString = (orderInQuestion) => {
    let infromationString = "Customer Name: " + getOrderInformationCustomerNameString(orderInQuestion) + " \nPancake type: " +
        getOrderInformationPancakeTypeString(orderInQuestion) + "\nToppings and Extras: " + getOrderInfromationToppingsAndExtrasString(orderInQuestion) +
        "\nDelivery option: " + getOrderInformationDeliveryString(orderInQuestion) +
        "\nTotal price: " + getOrderInformationTotalPriceString(orderInQuestion);

    return infromationString;
}

const printOrderInformationIntoDiv = (orderInQuestion, divCreated) => {

    let firstColumn = ["Customer Name: ", "Pancake Type: ", "Toppings and Extras", "Delivery: ", "Total Price: "];
    let secondColumn = [getOrderInformationCustomerNameString(orderInQuestion),
    getOrderInformationPancakeTypeString(orderInQuestion),
    getOrderInfromationToppingsAndExtrasString(orderInQuestion),
    getOrderInformationDeliveryString(orderInQuestion),
    getOrderInformationTotalPriceString(orderInQuestion)];

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

orderSummaryButton.addEventListener('click', orderSummary);
saveOrderButton.addEventListener('click', saveOrder);
allOrdersButton.addEventListener('click', showAllOrders);

createOrder();