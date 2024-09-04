const myClass = document.getElementsByClassName('myClass');
const myParagraph = document.getElementsByName('p');
const myID = document.getElementById('myID');
const mySecondID = document.querySelector('#myID');
const mySecondClass = document.querySelectorAll('.myClass');
const myClassSecond = document.querySelector(".myClass");

const button1 = document.querySelector("#myButton1");
const button2 = document.querySelector("#myButton2");
const button3 = document.querySelector("#myButton3");


const textField = document.querySelector("#textField");

console.log(textField.textContent);

const title = document.querySelector("h1");

function myFunction() {
    console.log('sdadasdasd');

}

const myFunction2 = () => title.textContent = "Important stuff";

const myFunction3 = () => {
    title.textContent = "asdada";
}

const myFunction4 = () => console.log(textField.value);

//console.log(button);
/*
console.log(myClass);
console.log(myParagraph);
console.log(myID);
console.log(mySecondID);
console.log(mySecondClass);
console.log(myClassSecond);*/

/*
function myFunction() {
    alert("asdad");
}*/

button1.addEventListener("click", myFunction2);
button2.addEventListener("click", myFunction3);

button3.addEventListener("click", myFunction4);

console.log(title.textContent); // returns what is inside the object