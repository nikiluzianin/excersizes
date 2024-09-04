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



const myFunction = () => {
    const childElement = document.createElement("li")
    childElement.textContent = textField.value;
    parentElement.appendChild(childElement);
    textField.value = "";
}

button.addEventListener("click", myFunction);

