/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */

function newFunction () {
    
    let sumOfElements = 0;
    let numberOfElements = 0;
    let smallestElement, biggestElement;
    let number;

    number = parseInt(prompt("Input number"),10);
    smallestElement = number;
    biggestElement = number;

    for (let i = 0; i < 10; i++) {
        number = parseInt(prompt("Input number"),10);
        
        smallestElement > number ? smallestElement = number : null ;

        biggestElement < number ? biggestElement = number : null;

        sumOfElements += number;

        numberOfElements++;

    }

    console.log("min ", smallestElement, "max ", biggestElement, "sum ", sumOfElements, "avg ", (sumOfElements / numberOfElements));

}

newFunction();
