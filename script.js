'use strict';

const player = document.querySelectorAll('.player');
const firstScoreEl = document.querySelector('#score--0');
const secondSCoreEl = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const newButtonEl = document.querySelector('.btn--new');
const rollButtonEl = document.querySelector('.btn--roll');
const holdButtonEl = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

firstScoreEl.textContent = 0;
secondSCoreEl.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

rollButtonEl.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6) + 1;

  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `/images/dice-${dice}.png`;

  if (dice === 1) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
  } else {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
