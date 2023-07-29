//! DO NOT ALTER THIS CODE
const form = document.querySelector('form');
const btn = document.getElementById('guess-btn');
const startBtn = document.getElementById('comp-guess-start-btn');
const compGuessResponse = document.querySelector('#comp-guesses-response');
const highLowBtns = document.getElementById('lower-higher-btns').childNodes;
const res = document.getElementById('status-response');
let guessedNumber;
let numberToGuess = Math.floor(Math.random() * 100) + 1;

let displayResponse = (x) => {
    res.innerText = x;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    guessedNumber = form[0].value;

    let response = randomNumber(guessedNumber, numberToGuess);

    displayResponse(response);

    form[0].value = '';
});

// Computer Guesses Users Number Display functions

startBtn.addEventListener('click', async () => {
    compGuessResponse.style = `
            color: lightgray;
            text-shadow: none;
        `
    let startNum = Math.floor((Math.random() * 100) + 1);

    let response = await startCompGuess(startNum);
    displayCompGuessReply(response)
});

highLowBtns[1].addEventListener('click', () => {
    let response = compGuess('lower');
    displayCompGuessReply(response,false);
});

highLowBtns[3].addEventListener('click', () => {
    let response = compGuess('correct');
    displayCompGuessReply(response,true);
});

highLowBtns[5].addEventListener('click', () => {
    let response = compGuess('higher');
    displayCompGuessReply(response,false);
});

function displayCompGuessReply(value, bool) {

    if(bool) {
        compGuessResponse.style = `
            color: crimson;
            text-shadow: 2px 2px 2px lightgrey;
        `
    }
    compGuessResponse.textContent = value;
}

//! DO NOT ALTER THE CODE ABOVE