'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let stillPlaying = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

rollButtonEl.addEventListener('click', function () {
  console.log('Roll Button Clicked');
  if (stillPlaying) {
    const dice = Math.floor(Math.random() * 6) + 1;

    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `/images/dice-${dice}.png`;

    if (dice === 1) {
      switchPlayer();
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

holdButtonEl.addEventListener('click', function () {
  console.log('Hold button Clicked');
  if (stillPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    console.log(scores[activePlayer]);

    if (scores[activePlayer] >= 10) {
      stillPlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newButtonEl.addEventListener('click', function () {
  stillPlaying = true;
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  firstScoreEl.textContent = 0;
  secondSCoreEl.textContent = 0;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  activePlayer = 0;
  switchPlayer();
});
