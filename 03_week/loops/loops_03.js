// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function calculateSpeed() {
    
    console.log("Hi");
    let distance = 0;
    let time = 0;

    do {
        distance = prompt("Input distance"); 
        if (distance != 0) {
            time = prompt("Input time");
            console.log( distance / time);
        }

    } while (distance != 0);
}

calculateSpeed();
