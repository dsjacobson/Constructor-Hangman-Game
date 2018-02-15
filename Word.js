var Letter = require("./Letter.js");


function Word(word) {
    this.letters = [];
    this.numberOfLetters = 0;
    this.start = function() {
        for (i=0;i<word.length;i++) {
            var newLetter = new Letter(word[i], false);
            this.letters.push(newLetter);
        }
    };
    this.letterInput = function(char) {
        this.numberOfLetters = 0;
        for (i=0;i<this.letters.length;i++) {
            this.letters[i].showLetter(char);
            if (this.letters[i].undChar === true) {
                this.numberOfLetters++;
            }
        }
    };
    this.display = function() {
        var word = " ";
        for (i=0;i<this.letters.length;i++) {
            word = word + this.letters[i].showLetter();
        }
        console.log(word);
    };
};

module.exports = Word;