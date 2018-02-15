var Letter = function (char) {
    this.char = char;
    this.undChar = false;
    
    this.showLetter = function() {
        
        if (this.char === " ") {
            this.undChar = true;
            return this.char;
        }
        else if (this.undChar === true) {
                return this.char;
            }
            else {
                return "_";
            }
    };
};

module.exports = Letter;