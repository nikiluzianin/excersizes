// Exerice 1: Determine array length and conditional check
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
/*
Create a function called myAlphabetLength to log the length of the array.
Also include an if-statement to check if the array length is less than 5.
Expected outcome: 
"The length of myAlphabet: 7"
"Array length is greater than or equal to 5."
*/
// Write your function here

const myAlphabetLength = () => (myAlphabet.length < 5) ? "Array length is less than 5" :
    ("The length of the Alphabet: " + myAlphabet.length + "\nArray length is greater than or equal to 5.\n");

console.log(myAlphabetLength());

// Exerice 2: Iterate over array and log each item with its index
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
/*
Log each planet in the array along with its index.
Expected outcomes:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here

const iteratingArray = () => planets.forEach((planet, index) => console.log("Planet: " + planet + " Index: " + index));

iteratingArray();
console.log("\n")

// Exerice 3: Log array items with their types
const wowDatatypes = [1, 'text', false, null, undefined];
/*
Iterate over the array, logging each item, its index, and data type.
Expected outcomes:
"Item: 1, Index: 0, Type: number"
...
"Item: undefined, Index: 4, Type: undefined"
*/
// Write your code here

const iteratingArray2 = () => wowDatatypes.forEach((wow, index) => console.log("Item: " + wow + " Index: " + index + " Type: " + typeof (wow)));

iteratingArray2();
console.log("\n");

// Exerice 4: Log array items without using a loop
let myArr = [1, 2, 'One', true];
/*
Log each item in this array without explicitly using a loop.
Expected outcomes: 1, 2, "One", true
*/
// Write your code here
const iteratingArray3 = () => myArr.forEach((myArrElement) => console.log(myArrElement));

iteratingArray3();
console.log("\n");

// Exerice 5: Find common courses between two students
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
/*
Identify and log any courses common to both student1Courses and student2Courses.
Expected outcome: "Common course: Programming"
*/
// Write your code here

const comparing = () => student1Courses.forEach((course1) => (student2Courses.find((course2) => course2 == course1)) && console.log(course1));

comparing();
console.log("\n")

// Exerice 6: Log each letter of array items
let furniture = ['Table', 'Chairs', 'Couch'];
/*
For each item in the furniture array, log every letter.
Expected outcomes:
"Letters in 'Table': T, a, b, l, e"
...
"Letters in 'Couch': C, o, u, c, h"
*/
// Write your code here

const spelling = () => furniture.forEach((piece) => console.log("Letters in " + piece + ": " + piece.split('').join(", ")));

// piece.split('').forEach((letter) => console.log(letter)););
spelling();
console.log("\n");


// Exerice 7: Filter positive temperatures
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Write the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Expected outcome: [3, 22, 5, 18]
*/
// Write your code here

const getPositiveTemperatures = () => console.log(temperatures.filter((temp) => temp > 0));

getPositiveTemperatures();


// Exerice 8: Filter Odd Years
/*
Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.
Expected outcomes:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

// Write your code here

const getOddYears = (years) => years.filter((year) => year % 2 != 0);

console.log("\n");

// Sample usage - Uncomment to test your function
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]