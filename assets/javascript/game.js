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
            if (keyGuess.which >= 65 && keyGuess.which <= 90) {
                //console.log("key: " + keyGuess.key);
                var guess = keyGuess.which;
                if (guess == this.cpuKeyCode) {
                    this.wins++;
                    $("#wins-s").text(this.wins);
                    //console.log("Wins: " + psychicGame.wins);
                    this.restartGame();
                } else {
                    this.guessesLeft -= 1;
                    if (this.guessesLeft == 0) {
                        this.losses++;
                        //console.log("losses: " + psychicGame.losses)
                        $("#losses-s").text(this.losses);
                        this.restartGame();
                    } else {
                        //console.log("guesses-left: " + psychicGame.guessesLeft);
                        $("#guesses-left").text(this.guessesLeft);
                        //console.log(psychicGame.alphabet.search(keyGuess.key));
                        this.guessed.push(this.alphabet.substring(guess - 65, guess - 64));
                        $("#soFar").text(this.guessed);
                    }
                }
            }
        }
    }

    psychicGame.initializeGame();
    $(document).on("keyup", function(e) {
        psychicGame.runGame(e);
    });
















}