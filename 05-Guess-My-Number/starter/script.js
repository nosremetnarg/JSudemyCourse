'use strict';

// console.log( document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log( document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// ====================================================
// number game =====
// ==================================
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log("first secret number", secretNumber);

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
};
const displayScore = function(score) {
    document.querySelector('.score').textContent = score
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
      // no user input
    displayMessage('⛔️ No number!');
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if ( score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore; // update highscore
    } 

    // when guess is wrong
  } else if (guess !== secretNumber ) {
    if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
        score--;
        displayScore(score);
      } else {
          displayMessage('💥 You lost the game!');
          displayMessage(0);
      }
  }
});

document.querySelector('.again').addEventListener('click', function() {
    let newScore = 20;
    score = newScore;
    displayScore(score); // reset score
    document.querySelector('body').style.backgroundColor = '#222'; // reset background color
    document.querySelector('.number').style.width = '15rem'; // reset secret number size
    // document.querySelector('.number').textContent = secretNumber; // reset secret number
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?'; // reset secret number text
    document.querySelector('.guess').value = ''; // reset guess value
    let newSecretNumber = Math.trunc(Math.random() * 20) + 1;
    secretNumber = newSecretNumber;
    console.log(newSecretNumber, 'new secret number')

});

// ============================================
// =============================================