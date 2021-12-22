'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message
}
const displayScore = function (score) {
    document.querySelector(".score").textContent = score;
}
const displayNumber = function (number) {
    document.querySelector(".number").textContent = number
}


document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value)

    if (!guess) {
        displayMessage(`⛔ No Number !`)
    } else if (guess === secretNumber) {
        displayMessage(`✅ You Guessed It Right !`)
        document.body.style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = "30rem"
        displayNumber(secretNumber);
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess >= 21) {
        displayMessage(`💥 You Must Choose A Number Between 1 - 20 !`);
        score = score;
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `📈 Too High !` : `📉 Too Low !`);
            score--
            displayScore(score);
        } else {
            displayMessage(`😭 You Just Lost The Game `)
            displayScore(0);
            document.body.style.backgroundColor = guess === secretNumber ? '#60b347' : 'crimson';
        }
    }
})

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage(`Start guessing...`)
    displayScore(score);
    document.body.style.backgroundColor = "#222";
    displayNumber('?');
    document.querySelector(".guess").value = '';
    document.querySelector(".number").style.width = "15rem"
})