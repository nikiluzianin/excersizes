/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const title = document.getElementById("content");

const button = document.getElementById("myButton");

const myFunction = () => title.textContent = "Hello, World!";

button.addEventListener("click", myFunction);