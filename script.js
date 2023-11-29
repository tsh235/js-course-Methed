'use strict';

let playAgain;

do {
  window.marbles();

  playAgain = confirm('Хотите сыграть еще?');
} while (playAgain === true);
