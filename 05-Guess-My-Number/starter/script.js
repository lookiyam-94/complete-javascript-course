'use strict';

// State
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// DOM
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const bodyEl = document.querySelector('body');

// Constants
const DEFAULT_BG = '#222';
const WIN_BG = '#60b347';
const NUMBER_WIDTH_DEFAULT = '15rem';
const NUMBER_WIDTH_WIN = '30rem';
const AGAIN_BTN_DEFAULT = '#eee';
const AGAIN_BTN_LOSE = '#87CEEB';

// Helpers
const displayMessage = function (message) {
  messageEl.textContent = message;
};

const displayScore = function (value) {
  scoreEl.textContent = value;
};

const displayNumber = function (value) {
  numberEl.textContent = value === '?' ? '?' : `${value}cm`;
};

const updateHighscore = function () {
  if (score > highscore) {
    highscore = score;
    highscoreEl.textContent = highscore;
  }
};

const setWinStyles = function () {
  bodyEl.style.backgroundColor = WIN_BG;
  numberEl.style.width = NUMBER_WIDTH_WIN;
};

const resetStyles = function () {
  bodyEl.style.backgroundColor = DEFAULT_BG;
  numberEl.style.width = NUMBER_WIDTH_DEFAULT;
  againBtn.style.backgroundColor = AGAIN_BTN_DEFAULT;
};

// Game logic
const checkGuess = function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    displayMessage('⛔️ oh come on!');
  } else if (guess === secretNumber) {
    displayMessage('🥳Correct Number!');
    displayNumber(secretNumber);
    updateHighscore();
    setWinStyles();
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '🥲Nah! Too high!' : '😭Nah! Too low!'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('Set up a date and let me show you!');
      displayScore(0);
      againBtn.style.backgroundColor = AGAIN_BTN_LOSE;
    }
  }
};

const resetGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  guessEl.value = '';
  resetStyles();
};

// Event listeners
checkBtn.addEventListener('click', checkGuess);

guessEl.addEventListener('keydown', function (e) {
  if (['e', 'E', '+', '-'].includes(e.key)) {
    e.preventDefault();
  }
  if (e.key === 'Enter') {
    checkGuess();
  }
});

againBtn.addEventListener('click', resetGame);