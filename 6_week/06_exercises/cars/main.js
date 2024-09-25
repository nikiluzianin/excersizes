"use strict";

const searchText = document.querySelector("#searchBar");
const licenseText = document.querySelector("#licenseNumber");
const makerText = document.querySelector("#carMaker");
const modelText = document.querySelector("#carModel");
const yearText = document.querySelector("#carYear");
const ownerText = document.querySelector("#carOwner");
const priceText = document.querySelector("#carPrice");
const colorText = document.querySelector("#carColor");

const tableBody = document.querySelector("#table-body");

const searchResult = document.querySelector("#search-result");
const carDataErrors = document.querySelector("#car-data-errors");


const platesFormatRegex = /^[a-zA-Z]{3}\d{3}$/;
const currentYear = 2024;
const discountPercentage = 0.85;
const cars = [];


class Car {
    constructor(license, maker, model, year, owner, price, color) {
        this.license = license;
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.owner = owner;
        this.price = price;
        this.color = color;
    }
}


const checkSearchInput = () => {
    let allCorrect = true;
    try {
        if (searchText.value == "") {
            throw new Error("License number empty");
        } else if (!platesFormatRegex.test(searchText.value)) {
            throw new Error("License number is not correct. Should be in format ABC123")
        }

    } catch (error) {
        searchResult.textContent = error.message;
        allCorrect = false;
    }
    return allCorrect;
}

const searchCar = (searchingLicense) => {
    return cars.find((car) => car.license == searchingLicense);
}

const searchFromSearchBar = () => {
    if (checkSearchInput()) {
        const foundCar = searchCar(searchText.value);
        if (foundCar) {
            const discountPriceInfo = (currentYear - foundCar.year > 10) ? (", discounted price: " + foundCar.price * discountPercentage) : "";
            const carInfo = "make: " + foundCar.maker + ", model: " + foundCar.model + ", owner: " + foundCar.owner + ", price: " + foundCar.price + discountPriceInfo;
            searchResult.textContent = "Car found, info: \n" + carInfo;
        } else searchResult.textContent = "No results found"
    }
}

const addCarToTable = (car) => {

    const tableRow = document.createElement('tr');

    const discountPrice = (currentYear - car.year > 10) ? car.price * discountPercentage : "";

    for (let [key, value] of Object.entries(car)) {
        const tableCell = document.createElement('td');
        tableCell.textContent = value;
        tableRow.appendChild(tableCell);
        if (key == "price") {
            const tableCell = document.createElement('td');
            tableCell.textContent = (discountPrice == "") ? "" : discountPrice;
            tableRow.appendChild(tableCell);
        }
    }
    tableBody.appendChild(tableRow);
}

const cleanErrors = () => carDataErrors.textContent = "";

const printErrors = (allErrors) => carDataErrors.textContent += allErrors;

const checkInputs2 = () => {

    const inputErrors = [];
    const validationErrors = [];
    cleanErrors();

    if (licenseText.value.trim() == 0)
        inputErrors.push("License number empty");
    if (makerText.value.trim().length == 0)
        inputErrors.push("Car maker empty");
    if (modelText.value.trim().length == 0)
        inputErrors.push("Car model empty");
    if (yearText.value.trim().length == 0)
        inputErrors.push("Car year empty");
    if (ownerText.value.trim().length == 0)
        inputErrors.push("Car owner empty");
    if (priceText.value.trim().length == 0)
        inputErrors.push("Car price empty");
    if (colorText.value.trim().length == 0)
        inputErrors.push("Car color empty");

    try {
        if (inputErrors.length != 0)
            throw new Error("Input errors:\n" + inputErrors.join("\n") + '\n');
    } catch (error) {
        printErrors(error.message);
    }

    if (!platesFormatRegex.test(licenseText.value))
        validationErrors.push("License number is not correct")
    if (searchCar(licenseText.value))
        validationErrors.push("Car with such license number already exists")
    if ((yearText.value < 1900) || (yearText.value > currentYear))
        validationErrors.push("Car year should be between 1900 and " + currentYear);
    if (priceText.value < 0)
        validationErrors.push("Car price should be positive");

    try {
        if (validationErrors.length != 0)
            throw new Error("Input errors:\n" + validationErrors.join("\n") + '\n');
    } catch (error) {
        printErrors(error.message);
    }

    return ((inputErrors.length == 0) && (validationErrors.length == 0));

    /*
    let allErrors = []; // TODO
    
 
    if (actuallyCheck) {
        try {
            if (licenseText.value == "") {
                throw new Error("License number empty");
            } else if (!platesFormatRegex.test(licenseText.value)) {
                throw new Error("License number is not correct")
            } else if (searchCar(licenseText.value)) {
                throw new Error("Car with such license number already exists")
            }
        } catch (error) {
            allErrors = allErrors + error.message + "\n";
        }
 
        try {
            if (makerText.value == "")
                throw new Error("Car maker empty");
        } catch (error) {
            allErrors = allErrors + error.message + "\n";
        }
 
        try {
            if (modelText.value == "") throw new Error("Car model empty");
        } catch (error) {
            allErrors = allErrors + error.message + "\n";
        }
 
        try {
            if (yearText.value == "") {
                throw new Error("Car year empty");
            } else if ((yearText.value < 1900) || (yearText.value > currentYear)) {
                throw new Error("Car year should be between 1900 and " + currentYear);
            }
        } catch (error) {
            allErrors = allErrors + error.message + "\n";
        }
 
        try {
            if (ownerText.value == "") throw new Error("Car owner empty");
        } catch (error) {
            allErrors = allErrors + error.message + "\n";
        }
 
        try {
            if (priceText.value == "") {
                throw new Error("Car price empty");
            } else if (priceText.value < 0) {
                throw new Error("Car preice should be positive");
            }
        } catch (error) {
            allErrors = allErrors + error.message + "\n";
        }
 
        try {
            if (colorText.value == "") throw new Error("Car color empty");
        } catch (error) {
            allErrors = allErrors + error.message + "\n";
        }
 
        carDataErrors.textContent = allErrors;
    }
    return (allErrors == "");*/
}

const checkInputs1 = (actuallyCheck) => {
    if (actuallyCheck)
        return checkInputs2();
    return true;
}


const addCarFromFields = () => {
    if (checkInputs1(true)) {

        let newCar = new Car(licenseText.value, makerText.value, modelText.value, yearText.value, ownerText.value, priceText.value, colorText.value);
        addCar(newCar);
        resetFields();
    }
}

const addCar = (newCar) => {
    cars.push(newCar);
    addCarToTable(newCar);
}

const resetFields = () => {
    licenseText.value = "";
    makerText.value = "";
    modelText.value = "";
    yearText.value = "";
    ownerText.value = "";
    priceText.value = "";
    colorText.value = "";
    searchText.value = "";
    carDataErrors.textContent = "";
    searchResult.textContent = "";
}

const resetSearch = () => searchText.value = "";

// listeners
document.querySelector("#search").addEventListener("click", function (ev) {
    ev.preventDefault();
    searchFromSearchBar(searchText.value);
});

document.querySelector("#addCar").addEventListener("click", function (ev) {
    ev.preventDefault();
    addCarFromFields();
});

document.querySelector("#reset").addEventListener("click", function (ev) {
    ev.preventDefault();
    resetFields();
});

addCar(new Car("asd123", "VW", "Scirpccp", 2012, "Nikita", 10000, "Red"));
addCar(new Car("asd124", "Audi", "A3", 2000, "Other person", 2000, "White"));

