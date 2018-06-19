window.onload = function() {



    var cpuNum = Math.floor(Math.random()*10);
    console.log(cpuNum);
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessed = [];
    document.onkeyup = function(keyPress) {
        var guess = parseInt(keyPress.key);
        if (typeof guess === "number") {
            if (guess == cpuNum) {
                wins++;
                console.log("Wins: "+wins);
                cpuNum = Math.floor(Math.random()*10);
            } else {
                guessesLeft -= 1;
                guessed.push(guess);
                console.log("guessed: "+guessed);
            }
            
        }


    }













}