'use strict';

const player = document.querySelectorAll('.player');
const firstScoreEl = document.querySelector('#score--0');
const secondSCoreEl = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const newButtonEl = document.querySelector('.btn-new');
const rollButtonEl = document.querySelector('.btn-roll');
const holdButtonEl = document.querySelector('.btn-hold');

firstScoreEl.textContent = 0;
secondSCoreEl.textContent = 0;
diceEl.classList.toggle('hidden');
