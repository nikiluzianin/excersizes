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

const deliveryOption = document.querySelector('#delvieryOptions');

//const

//const priceForTopping = 1;

let allAdditionalSelectors = [nutsToppingSelector, bananasToppingSelector, syrupToppingSelector, creamExtraSelector, iceExtraSelector];

updatePrice = () => {
    let newPrice = parseInt(typeSelector.value, 10); // getting the base price

    for (let selector of allAdditionalSelectors) {
        (selector.checked) && (newPrice += parseInt(selector.value, 10));
    } // loop through all the selectors

    /*
    (nutsToppingSelector.checked) && (newPrice = newPrice + priceForTopping); // adding the topings
    (bananasToppingSelector.checked) && (newPrice = newPrice + priceForTopping);
    (syrupToppingSelector.checked) && (newPrice = newPrice + priceForTopping);

    (creamExtraSelector.checked) && (newPrice = newPrice + parseInt(creamExtraSelector.value, 10));
    (iceExtraSelector.checked) && (newPrice = newPrice + parseInt(iceExtraSelector.value, 10));
    */ // lame solution for the selectors





    for (let totalPriceField of totalPriceFields) totalPriceField.textContent = '$' + newPrice;
}

wholeForm.addEventListener('input', updatePrice);

