const form = document.querySelector("#form");
const guessHint = document.querySelector(".guess-hint");
const input = document.querySelector("#guess");
const restartButton = document.querySelector("#restart-button");
const submitButton = document.querySelector("#submit-button");

let numberOfGuess = 0;
let randomNumber = Math.floor((Math.random() * 100) + 1);

form.addEventListener("submit", event => {
    event.preventDefault();
    const inputValue = input.value;
    input.value = "";
    numberOfGuess ++;
    if (numberOfGuess < 10 && Number(inputValue) > randomNumber) {
        guessHint.innerHTML = `Number of guesses ${numberOfGuess} / 10 <br> Your guess was too <span class="high">high</span>!!`
    }
    else if (numberOfGuess < 10 && Number(inputValue) < randomNumber) {
        guessHint.innerHTML = `Number of guesses ${numberOfGuess} / 10 <br> Your guess was too <span class="low">low</span>!!`
    }
    else if (numberOfGuess <= 10 && Number(inputValue) === randomNumber) {
        guessHint.innerHTML = `Yay you won!!<br> The number was ${randomNumber} <br> You guessed it in ${numberOfGuess} guesses`
        input.disabled = true;
        submitButton.disabled = true;
    }
    else {
        guessHint.innerHTML = `The number is ${randomNumber}`
        input.disabled = true;
        submitButton.disabled = true;
    }
})

restartButton.addEventListener("click", function() {
    restart();
})

function restart() {
    guessHint.innerHTML = ``;
    input.disabled = false;
    submitButton.disabled = false;
    numberOfGuess = 0;
    randomNumber = Math.floor((Math.random() * 100) + 1);
}