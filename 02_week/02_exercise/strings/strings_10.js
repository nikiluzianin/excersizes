/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

/*function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
}*/

const capitalize = word => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();

// Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"
