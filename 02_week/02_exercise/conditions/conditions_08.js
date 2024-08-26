/* Write a function named getDayName that takes a number (1-7) as a parameter and returns the corresponding day of the week (1 for Monday, 2 for Tuesday, etc.). If the number is out of range, return "Invalid day". */

function getDayName (day) {
    switch(day) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 7:
            return "Sunday";
            break;
        default:
            return "Invalide day";
    }
}

// Sample usage - do not modify
console.log(getDayName(1));  // Outputs: "Monday"
console.log(getDayName(4));  // Outputs: "Thursday"
console.log(getDayName(8));  // Outputs: "Invalid day"
