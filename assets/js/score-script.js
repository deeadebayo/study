var p1Button = document.querySelector("#btn-1");
var p2Button = document.querySelector("#btn-2");
var resetButton = document.querySelector("#btn-reset");
var maxScoreInput = document.querySelector("input[type='number']");
var maxScore = document.querySelector("#max-points");

var p1Counter = document.querySelector("#player1score");
var p2Counter = document.querySelector("#player2score");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

function reset() {
    p1Score = 0;
    p2Score = 0;

    p1Counter.textContent = p1Score;
    p2Counter.textContent = p2Score;

    p1Counter.classList.remove("winner");
    p2Counter.classList.remove("winner");

    gameOver = false;
};

p1Button.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore) {
            gameOver = true;
            p1Counter.classList.add("winner");
        }
        p1Counter.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            gameOver = true;
            p2Counter.classList.add("winner")
        }
        p2Counter.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function () {
    reset();
});

maxScoreInput.addEventListener("change", function() {
    maxScore.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

