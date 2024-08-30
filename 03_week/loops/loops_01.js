// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

function programOutput() {
    for (let i = 1; i < 101; i++) i %2 !== 0 && console.log(i);
}

programOutput();