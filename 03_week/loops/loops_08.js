// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

function newFunction () {
    
    let smallestElement, biggestElement;
    let number;

    let decision = parseInt(prompt("How many numbers do you want to do? "),10);
    

    for (let i = 0; i < decision; i++) {
        number = parseInt(prompt("Input number"),10);

        if (i==0) {
            smallestElement = number;
            biggestElement = number;
        }
        
        smallestElement > number ? smallestElement = number : null ;

        biggestElement < number ? biggestElement = number : null;



    }

    console.log("min ", smallestElement, "max ", biggestElement);

}

newFunction();