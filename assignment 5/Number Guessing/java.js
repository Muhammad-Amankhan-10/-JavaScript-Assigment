function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    const userGuess = (document.getElementById("guessInput").value);

    if (userGuess === randomNumber) {
        document.getElementById("result").textContent = "Congratulations! You guessed the correct number: " + randomNumber;
    } else {
        document.getElementById("result").textContent = "Sorry, the correct number was " + randomNumber + ". Try again!";
    }
}