'use strict';

/*
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = `${secretNumber}cm`;

let score = 20;

// check guess function - basically the whole game logic
const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);

//no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ oh come on!';

//correct number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent =`${secretNumber}cm`;
    //wing state change
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

//too high
  } else if (guess > secretNumber) {
    if (score > 1){
        document.querySelector('.message').textContent = 'Nah! Too high!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Set up a date and let me show you!';
        document.querySelector('.score').textContent = 0;

        document.querySelector('.again').style.backgroundColor = '#87CEEB';
    }

//too low
  } else if (guess < secretNumber) {
    if (score > 1){
        document.querySelector('.message').textContent = 'Nah! Too high!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Set up a date and let me show you!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.again').style.backgroundColor = '#87CEEB';
    }
  }
};

document.querySelector('.check').addEventListener('click', checkGuess);

document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault();
  }
  if (e.key === 'Enter') {
    checkGuess();
  }
});

//again button functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber=Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.again').style.backgroundColor = '#eee';
});