// Start with words to guess, how many guesses the player gets, player key input etc
// run function to take user key, run it against the word, see if user key matches
// if it does, add the key selected to the word
// if not subtract from guesses
// if there are no more guesses the player loses
// if there are no more letters to be guessed the player wins

var words = ["valve", "nintendo", "microsoft", "sony", "infinityward", "blizzard"];

var correctWord = "";
var correctLetters = []
var spaces = 0;
var spacesAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function Game() {
    correctWord = words[Math.floor(Math.random() * words.length)];

    correctLetters = correctWord.split("");

    spaces = correctLetters.length;

    for (var i = 0; i < spaces; i++) {
        spacesAndCorrect.push("_");
    }

    document.getElementById("currentWord").innerHTML = "  " + spacesAndCorrect.join("  ");

    console.log(correctWord);
    console.log(correctLetters)
    console.log(spaces)
    console.log(spacesAndCorrect)
}

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    spacesAndCorrect = [];
    Game()
}

function userGuess(letter) {
    var correctLetter = false;
    for (var i = 0; i < spaces; i++) {
        if (correctWord[i] == letter) {
            correctLetter = true;
        }
    }
    if (correctLetter) {
        for (var i = 0; i < spaces; i++) {
            if (correctWord[i] == letter) {
                spacesAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(spacesAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (correctLetters.toString() == spacesAndCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("losetracker").innerHTML = " " + losses;
    }
    document.getElementById("currentWord").innerHTML = "  " + spacesAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    userGuess(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}