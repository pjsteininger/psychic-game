window.onload = function () {

    var psychicGame = {
        alphabet: "abcdefghijklmnopqrstuvwxyz",
        initializeGame: function () {
            this.cpuNum = Math.floor(Math.random() * 26);
            this.cpuLetter = this.alphabet.substring(this.cpuNum, this.cpuNum + 1);
            this.cpuKeyCode = this.cpuNum + 65;
            this.wins = 0;
            this.losses = 0;
            this.guessesLeft = 10;
            this.guessed = [];
            console.log(this.cpuLetter);
        },
        restartGame: function () {
            this.cpuNum = Math.floor(Math.random() * 26);
            this.cpuLetter = this.alphabet.substring(this.cpuNum, this.cpuNum + 1);
            this.cpuKeyCode = this.cpuNum + 65;
            this.guessed = [];
            this.guessesLeft = 10;
            $("#guesses-left").text(psychicGame.guessesLeft);
            $("#soFar").text(this.guessed);
            console.log(this.cpuLetter);
        },
        runGame: function (keyGuess) {
            console.log(this);
            console.log("key: "+keyGuess.key);
            var guess = keyGuess.which;
            if (guess == psychicGame.cpuKeyCode) {
                psychicGame.wins++;
                $("#wins-s").text(psychicGame.wins);
                console.log("Wins: " + psychicGame.wins);
                psychicGame.restartGame();
            } else {
                psychicGame.guessesLeft -= 1;
                if (psychicGame.guessesLeft == 0) {
                    psychicGame.losses++;
                    console.log("losses: "+psychicGame.losses)
                    $("#losses-s").text(psychicGame.losses);
                    psychicGame.restartGame();
                } else {
                    console.log("guesses-left: "+psychicGame.guessesLeft);
                    $("#guesses-left").text(psychicGame.guessesLeft);
                    console.log(psychicGame.alphabet.search(keyGuess.key));
                    psychicGame.guessed.push(psychicGame.alphabet.substring(guess-65, guess-64));
                    $("#soFar").text(psychicGame.guessed);
                }
            }
        }
    }

psychicGame.initializeGame();
$(document).on("keyup", psychicGame.runGame);

    













}