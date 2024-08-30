// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

function numbers () {

    let positiveNumbers = 0;
    
    for (let i = 0; i < 20; i++) {
        let numberNow = prompt("input number " + (i+1));
        numberNow > 0 && positiveNumbers++;
    } 
    console.log(positiveNumbers);
}

numbers();