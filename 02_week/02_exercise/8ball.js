// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.


function answer() {

    let numberOfOptions = 4;
    let optionNumber = Math.round(Math.random() * (numberOfOptions - 1));
    switch (optionNumber) {
        case (0) :
            return "It is certain" ;
            break;
        case (1) :
            return "As I see it, yes";
            break;
        case (2):
            return "Reply hazy, try again";
            break;
        case (3):
            return "Don't count on it";
            break;
    }

}

function askForPrediction() {

    console.log("Hi");
    let question = prompt(" What do you want to ask me?"); 
    console.log ("So you have asked " + question);
    console.log(answer());

}

askForPrediction();
