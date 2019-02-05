// The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

const Word = require("./word.js");
const inquirer = require('inquirer');

let catPunWords = [
    "clawful", "furmidable", "purrfect", "furtunate", "clawver", "purrhaps", "pawsibility", "furend", "purrty", "litterate", "unfurtunate", "catatonic", "hissterical", "litterally", "hisstory", "pawdon me", "furmiliar", "pawsome", "cattitude", "furever", "apawling", "catastrophe", "radiclaw", "infurior", "purrceive", "purrsue", "meowsician", "pawlease", "purrsuasion", "pawsitive"
]
let guesses = 8

// var myWord = new Word("faye");
//     console.log(myWord.returnstring());
//     console.log(myWord.guessed("f"));
//     console.log(myWord.returnstring())
//     console.log(myWord.guessed("y"));
//     console.log(myWord.returnstring());

let myWord = {};
var originalWord = "";
var guessedLetters = "";

function game() {
    let newWord = catPunWords[Math.floor(Math.random() * catPunWords.length)];
    originalWord = newWord;
//     console.log(newWord);
    myWord = new Word(newWord);
    console.log(myWord.returnstring());
    guesses = 8;
    guessedLetters = ""
    prompt();
}

game();

function prompt() {
    if (guesses > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "userInput",
                message: "Guess a letter to complete this Pawsome cat pun!"
            }

        ]).then(function (user) {
            if ((user.userInput.length === 1) && /^[a-zA-Z]+$/) {
                user.userInput = user.userInput.toLowerCase();
                if (guessedLetters.indexOf(user.userInput) > -1)
                {
                    console.log("\nYou already guessed that letter. Please guess again.\n");
                    prompt();
                }
                guessedLetters += user.userInput;
                // console.log(myWord.guessed(user.userInput));
                if (myWord.guessed(user.userInput) == true) {
                    console.log("\nCORRECT!\n");
                    if (originalWord == myWord.returnGoodString()) {
                        console.log("\n\nYou guessed purrfectly! Next word\n");
                        game();
                    }
                    else {
                        console.log(myWord.returnstring());
                        prompt();
                    }
                }
                else {
                    console.log("\n\nINCORRECT!\n");
                    guesses--;
                    console.log(guesses + " guesses remaing.");
                    prompt();
                }
            }
            else {
                console.log("\n\nPlease enter one letter from a to z.\n");
                prompt();
            }
        })
    }
    else {
        console.log("\n\nOh no! A catastrophic defeat. Next Word\n");
        game();
    }
};
