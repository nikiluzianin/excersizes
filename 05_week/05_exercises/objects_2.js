/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here

function book(title, author, yearPublished, genres = []) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres
}

const library = {
    books: [new book("Harry Potter 1", "J.K. Rowling", 1991), new book("1984", "G. Orwell", 1949)]
};


/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here

console.log("1st book's title: " + library.books[0].title)
library.books[1].yearPublished = 2000;
console.log("Updated 2nd book's year: " + library.books[1].yearPublished);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

library.books[0].genres = ["fiction", "for children"];
library["books"][0].isAvailable = true;

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here


library.books.push(new book("title", "author", 2022, ["genre1", "genre2"]));

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

const createBook = (title, author, yearPublished, genres) => new book(title, author, yearPublished, genres);

let newTitle = prompt("Input title");
let newAuthor = prompt("Input autor");
let newYear = prompt("Input year");
let newGenresString = prompt("Input genres separated by comma");

let newGenres = newGenresString.split(', ');

console.log(createBook(newTitle, newAuthor, newYear, newGenres));


/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const jsonString = JSON.stringify(library);
console.log(jsonString);

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
