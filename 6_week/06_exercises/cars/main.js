"use strict";

searchText = document.querySelector("#searchBar");
licenseText = document.querySelector("#licenseNumber");
makerText = document.querySelector("#carMaker");
modelText = document.querySelector("#carModel");
ownerText = document.querySelector("#carOwner");
priceText = document.querySelector("#carPrice");
colorText = document.querySelector("#carColor");

searchResult = document.querySelector("#search-result");
tableBody = document.querySelector("#table-body");


const platesFormatRegex = /^[a-zA-Z]{3}\d{3}$/;


class Car {
    constructor(license, maker, model, owner, price, color) {
        this.license = license;
        this.maker = maker;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.color = color;
    }
}

let cars = [];

const searchCar = () => {
    if (platesFormatRegex.test(searchText.value)) {
        let foundCar = cars.find((car) => car.license == searchText.value);
        searchResult.textContent = foundCar ? ("Car found, make: " + foundCar.maker + ", model: " + foundCar.model + ", owner: " + foundCar.owner) : "No results found";

    } else searchResult.textContent = "Plate number is invalid";

}

const addCarToTable = (car) => {

    let tableRow = document.createElement('tr');
    for (let value of Object.values(car)) {
        let tableCell = document.createElement('td');
        tableCell.textContent = value;
        tableRow.appendChild(tableCell);
    }
    tableBody.appendChild(tableRow);

}

const addCar = () => {
    let newCar = new Car(licenseText.value, makerText.value, modelText.value, ownerText.value, priceText.value, colorText.value);
    cars.push(newCar);
    reset();
    addCarToTable(newCar);

}

const reset = () => {
    licenseText.value = "";
    makerText.value = "";
    modelText.value = "";
    ownerText.value = "";
    priceText.value = "";
    colorText.value = "";
}

const resetSearch = () => searchText.value = "";

// listeners
document.querySelector("#search").addEventListener("click", function (ev) {
    ev.preventDefault();
    searchCar();
});

document.querySelector("#addCar").addEventListener("click", function (ev) {
    ev.preventDefault();
    addCar();
});

document.querySelector("#reset").addEventListener("click", function (ev) {
    ev.preventDefault();
    reset()
});
