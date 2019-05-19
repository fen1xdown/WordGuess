// Start with words to guess, how many guesses the player gets, player key input etc
// run function to take user key, run it against the word, see if user key matches
// if it does, add the key selected to the word
// if not subtract from guesses
// if there are no more guesses the player loses
// if there are no more letters to be guessed the player wins

var words = [""];

var correctWord = words[Math.floor(Math.random() * words.length)];

console.log(correctWord);

var userGuess = 10;
var userKey = "";
var matchedTotal = 0;
var toDo = true;

var getWord = function () {
    return correctWord;
};
while (toDo) {
    toDo = false;

    var userInput = function() {
        var letterInput = "";

        $(document).keyup(function(e)
        {
            let letterInput = e.userKey
        })
    }

    for (var i = 0; i < correctWord.length; i++){

        var correctLetter = $("<div>");

        correctLetter.addClass("letter");
  
        correctLetter.attr("data-letter", correctWord[i]);
    
        correctLetter.text(correctWord[i]);
    
        $("#letter").append(correctLetter);
    }

    var rightLetters = function checkInput(userInput){

        var matches = 0;

        for (var i = 0; i < correctWord.length; i++) {

            if (userInput === correctWord[i]) {
            
                matches++;
            }

            return matches;
        }
    }

    userGursses--;

    if (matchedLetters > 0) {
        matchedTotal += matchedLetters;
    }

    if (matchedLetters === correctWord.length)
    {

    } else {
        if (userGuess <= 0) {
            
        }
    }
}