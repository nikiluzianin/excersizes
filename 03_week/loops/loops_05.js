// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.
function untilZero() {

    let totalSum = 0;
    let numberOfNumbers = 0;

    let newNumber = prompt("Enter a number");
    while (newNumber != 0){
        totalSum += parseInt(newNumber,10);
        numberOfNumbers++;
        newNumber = prompt("Enter a number");
    }
    console.log(totalSum / numberOfNumbers);

}

untilZero();