// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

function prOutput() {

    let finalString = " ";
    for (let i = 2; i < 100; i+=2) finalString = finalString + " " + i + " " + (100-i);

    return finalString.trim();
}

console.log(prOutput());