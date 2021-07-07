'use strict';

// Selecting Elements for later use

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;

// for testing
diceEl.classList.add('hidden');

// on click of roll dice button:  Generate random dice roll (1 to 6)display dice roll.  If (dice roll === 1) {switch player} else {add to current score}.  Display new score

// on click "hold" button : add current score to total score if (score >= 100) {Current player wins} else {switch player}

// on click "new": set all scores to 0.  Set player 1 as starting player

// function to switch players
