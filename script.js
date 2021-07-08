'use strict';

// Selecting Elements for later use

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

// state var
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// function to switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// on click of roll dice button:  Generate random dice roll (1 to 6)display dice roll.  If (dice roll !== 1) {add to current score} else {switch player}.  Display new score

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    switchPlayer();
  }
});

// on click "hold" button : add current score to total score. if (score >= 100) {Current player wins} else {switch player}

btnHold.addEventListener('click', function () {
  //1.  add current score to active player score

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2.  if score is  >=100 than win the game
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`player--${activePlayer}`)
      .classList.add('player--winner');
  }
  //3.   Switch to the next player
  switchPlayer();
});
// on click "new": set all scores to 0.  Set player 1 as starting player
