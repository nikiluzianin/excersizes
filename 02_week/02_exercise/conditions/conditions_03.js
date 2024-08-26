/**
Write a function named checkNumber that takes a number as a parameter and returns "Positive" if the number is greater than 0, "Negative" if it is less than 0, and "Zero" if it is exactly 0.
 */
function checkNumber (n) {
    return n < 0 ? "Negative" : n == 0 ? "Zero" : "Positive"; 
}


// Sample usage - do not modify
console.log(checkNumber(5));   // Outputs: "Positive"
console.log(checkNumber(-3));  // Outputs: "Negative"
console.log(checkNumber(0));   // Outputs: "Zero"

