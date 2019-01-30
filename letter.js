// Letter.js should not require any other files.

// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js

// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

let Letter = function(underlyingcharacter) {
    this.underlyingCharacter = underlyingcharacter;
    this.guessedYet = false;
    this.getChar = function() {
        if (this.guessedYet === true) {
            return this.underlyingCharacter;
            // console.log(this.underlyingcharacter) on word spaces that contain the underlying character guessed
            }
        else {
            return "_"
            // console.log("_") on word spaces that do not contain the underlying character guessed
        }
      }
    this.guess = function(letterGuessed) {
        if (letterGuessed == this.underlyingCharacter) {
            this.guessedYet = true;
            return true
        }
        else {
            return false
        }
        //if word space already has a letter loaded the correctguess boolean should already be set to true.  If the letter has not been guessed default will set to false.  Upon the correct underlyingcharacter being guessed the character should be flipped from false to true
        // else if the character is not a correct guess then the value for that particular character 
            
    }
 
    };

    module.exports = Letter;