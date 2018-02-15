var inquirer = require("inquirer");
var Word = require("./Word.js");

var teamName;
var guessCount = 10;

var teamsArray = ["vikings", "twins", "wild", "lynx", "north stars", "gophers", "tommies", "timberwolves"];


//Select random word from word array 
function selectWord() {
    var randomWord = Math.floor(Math.random()*Math.floor(teamsArray.length));

//
    teamName = new Word(teamsArray[randomWord]);
    teamName.start();
}

//Create start game function
function startGame() {
    if (guessCount > 0) {
    
    //inquire prompt
        inquirer.prompt([

        {
            name: "letterInput",
            type: "input",
            message: "Guess a letter!"
        }
        
        ]).then(function(answers) {
            var lastGuess = teamName.numberOfLetters;
            var currentGuess = teamName.numberOfLetters;
        
            
            if (lastGuess < currentGuess) {
                console.log("\nCorrect!!!\n");
            }
            else if (lastGuess === currentGuess) {
                guessCount--;
                console.log("\nIncorrect!\n\nYou have "+ guessCount +" guesses left!\n");
            }

            startGame();
        });

    }
    else if (teamName.numberOfLetters === teamName.letters.length && guessCount > 0) {
        console.log("You got it right!");

        //restart game 
        selectWord();
        guessCount = 10;
        teamName.display();
        startGame();
    }
    else if (teamName.numberOfLetters < teamName.letters.length && guessCount === 0) {
        console.log("\nGame Over! Try Again!\n");
        
        //restart game
        selectWord();
        guessCount = 10;
        teamName.display();
        startGame();
    }

};

selectWord();
teamName.display();
startGame();