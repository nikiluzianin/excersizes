// Make program which will use a while loop to calculate the sum of all numbers from 1 to 100.

const newFunction = () => {
    let sumOfNumbers = 0;
    for (let i = 1; i < 101; i++) sumOfNumbers+=i;
    return sumOfNumbers;
}


console.log(newFunction());