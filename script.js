'use strict';

// Selecting Elements for later use

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

// state var
let currentScore = 0;

// initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// on click of roll dice button:  Generate random dice roll (1 to 6)display dice roll.  If (dice roll === 1) {switch player} else {add to current score}.  Display new score

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`dice roll: ${dice}`); // test purposes
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    // switch to next player
    currentScore = 0;
    current0El.textContent = currentScore;
  }
});

// on click "hold" button : add current score to total score if (score >= 100) {Current player wins} else {switch player}

// on click "new": set all scores to 0.  Set player 1 as starting player

// function to switch players
