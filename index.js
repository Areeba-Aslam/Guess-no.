var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = 0;

function checkGuess() {
    var userGuess = document.getElementById("guess").value;

    if (userGuess === '' || userGuess < 1 || userGuess > 100) {
        document.getElementById("result").innerHTML = "Please enter a number between 1 and 100.";
        return;
    }

    guesses++;
    
    if (userGuess == randomNumber) {
        document.getElementById("result").innerHTML = "Correct! You guessed it in " + guesses + " tries.";
    } else if (userGuess < randomNumber) {
        document.getElementById("result").innerHTML = "Too low!";
    } else {
        document.getElementById("result").innerHTML = "Too high!";
    }
}
