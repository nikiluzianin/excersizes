/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const button = document.querySelector("#addFruitBtn");
const textField = document.querySelector("#fruitInput")
const parentElement = document.querySelector("#fruitList");

// buttons and other elements on html etc



const myFunction = () => {
    const childElement = document.createElement("li") // creates new element li
    childElement.textContent = textField.value; // writes into him the text from fext field
    parentElement.appendChild(childElement); // adds new entry into the list
    textField.value = ""; // cleans teh text field
}

button.addEventListener("click", myFunction); // waits for the click

