// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// Word.js should only require Letter.js

const Letter = require("./letter.js");

let Word = function(word) {
    this.letters = [];
    // this.assignletters = function() {
        for (var i = 0; i < word.length; i++) {
        var letter = new Letter(word.charAt(i));
        this.letters.push(letter);
        }
    // }
    this.returnstring = function() {
        var returnString = "";
        for (var i = 0; i < this.letters.length; i++) {
            returnString += this.letters[i].getChar()  + ' ';
        }
        return returnString
    }
    this.returnGoodString = function() {
        var returnString = "";
        for (var i = 0; i < this.letters.length; i++) {
            returnString += this.letters[i].getChar();
        }
        return returnString
    }
    this.guessed = function(character) {
        var hasLetter = false;
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guess(character)){
                hasLetter = true;
            }
        }
        return hasLetter;
    }
}

module.exports = Word;
        // for (var i = 0; i < word.length; i++) {
        //     var letter = new letter(word.charAt(i), false);
        //     this.letters.push(letter);
        // }
        // this.addLetter = function() {
        //     this.letters.push(new Letter());
        //   };
        // };
        // this.letters = word.split("").map(function(letter) {
        //     return new Letter(letter);
        // })
    // this.getword = function() {
        // this.letters.map(function(letter) {
        //     return letter.returnletter();
        //})
        // var strWord = "";
        // for (var i = 0; i < letters.length; i++) {
        //     strWord += letters[i].underlyingcharacter;
        // }
        // return strWord;
    // }
// }


