// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

function newFunction () {

    let sumOfElements = 0;
    let numberOfElements = 0;
    let number;

    let decision = "y";

    do {
        number = prompt("Input number");
        sumOfElements += parseInt(number,10);
        numberOfElements++;

        decision = prompt("Do you want to continue? y/n")
    } while (decision == "y");
    
    console.log(sumOfElements/numberOfElements)

}

newFunction();