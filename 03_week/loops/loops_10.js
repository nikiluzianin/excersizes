// Make a programm which will take in a string as an argument and will reverse it.

const newFunction = word => {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) reversedWord += word[i];
    return reversedWord;
}

let word = prompt("Input a word");
console.log(newFunction(word));
