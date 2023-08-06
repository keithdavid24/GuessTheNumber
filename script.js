/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW

    //The number must be between 1 - 100
    let smallValue = 1;
    let largeValue = 100;

    // Conditional statment in If/else format
    if (userGuess < smallValue || userGuess > largeValue) {

        return "Guess needs to be between 1-100";
    }

    if (userGuess == computersNumber) {
        return (`The number was ${userGuess}`);
    } else if (userGuess < computersNumber) {
        return ("Higher");
    } else {
        return ("Lower");
    }


    // YOUR CODE ABOVE
};
// Global Variable
let currentNumber = 50;
let lowest = 1;
let highest = 100;



//* Have the Computer Guess your Number ---------------------------------------------
/*
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
    return (`Is your number ${currentNumber}`);
}
// Block Arrow Function
let createGuess = () => {
    currentNumber = Math.floor((Math.random() * 100) + 1); //Used the Math Object
    return currentNumber;
}
//  Created a fucntion for Lower, Higher and "That's it"
// Side note: didn't realize this needed to be in a switch statment
// got confused and created switch statement for reply section
function onLowerButtonClick() {
    highest = currentNumber - 1;           //Narrows the search to the lower half
    currentNumber = createGuess();         //Generate a new guess based on the updated range
    return `Your number is lower? is it the ${currentNumber}`;
}
function onHigherButtonClick() {
    lowest = currentNumber + 1;            //Narrows the search to the upper half
    currentNumber = createGuess();         //Generate a new guess based on the updated range
    return `Your number is higher? Is it ${currentNumber}?`;
}

function ohThatsItButtonClick() {
    //   When the user confirms that the number is correct
    return `I knew it was ${currentNumber}`;
}


function compGuess(reply) {
    /*
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */

    switch (reply) {
        case "lower":
            highest = currentNumber - 1;
            currentNumber = Math.floor((lowest + highest) / 2);
            return `Your number is lower? Is it ${currentNumber}?`;
        case "higher":
            lowest = currentNumber + 1;
            currentNumber = Math.floor((lowest + highest) / 2);
            return `Your number is higher? Is it ${currentNumber}?`;
        case "correct":
            return `I knew it was ${currentNumber}!`;
        default:
            return "Invalid response. Please reply with 'lower', 'correct', or 'higher'.";
    }
}

// Test the startCompGuess function after reassigning currentNumber.
console.log(startCompGuess());

// console.log(compGuess('lower'));
// console.log(compGuess('higher'));
// console.log(compGuess('correct'));

