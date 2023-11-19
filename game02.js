'use strict';

/*
Написать простой игровой бот, который умеет следующее:
  Загадывает число от 1 до 100;
  предлагает пользователю ввести свой вариант отгадки;
  если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
  если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
  если пользователь вводит правильное число, то бот выводит “Правильно!”;
  если пользователь ввел не число, то выводит “Введи число!”;
  если пользователь нажимает “Отмена”, то игра заканчивается.

  Усовершенствуйте игру, которую написали в game01

    бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне!!!
    бот отграничивает количество попыток до 30% от количества цифр в диапазоне!!!
    бот запоминает каждое число которое ввел пользователь и записывает в массив
    если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
    если диапазон от 50 до 100, то попыток бот даёт 15
    если попытки закончились игра прекращается
*/

let randomNumber;

const getRange = () => {
  let start;
	do {
    start = start === undefined
      ? +prompt('Введите начальное число диапазона:')
      : +prompt('Вы ввели не число! Введите число:');
	} while (Number.isNaN(start));

  let end;
	do {
    end = end === undefined
      ? +prompt('Введите конечное число диапазона:')
      : +prompt('Вы ввели не число! Введите число:');
	} while (Number.isNaN(end));

  const startRange = start < end ? start : end;
  const endRange = start > end ? start : end;

  return [startRange, endRange];
}

const getRandomNumber = ([ min, max ]) => {
  const botNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('secretNumber: ', botNumber);
  alert(`Я загадал число в диапазоне от ${min} до ${max}`);
  return botNumber;
};
  
const checkGuess = (guess) => {
  let message;

  if (guess == secretNumber) {
    message = `Поздравляю, вы угадали число за ${guessCount} попыток!`;
  } else if (guess > secretNumber) {
    message = 'Меньше! Попробуйте еще раз.';
  } else {
    message = 'Больше! Попробуйте еще раз.';
  }

  return message;
};

const userRange = getRange();

let guessCount = 0;
let maxGuesses = Math.floor((userRange[1] - userRange[0]) * 30 / 100);

const secretNumber = getRandomNumber(userRange);

const allGuesses = [];

while (guessCount < maxGuesses) {
  let guess;
  
	do {
    guess = (guess === undefined)
      ? +prompt(`У вас ${maxGuesses - guessCount} попыток. Введите свой вариант числа:`)
      : +prompt(`Вы ввели не число! Введите число:`);
	} while (Number.isNaN(guess));

  if (allGuesses.includes(guess)) {
    alert(`Вы уже называли число ${guess}. Попытка не засчитывается`);
  } else {
    allGuesses.push(guess);
    guessCount++;
    alert(checkGuess(guess));

    if (guess == secretNumber) {
      break;
    }
  }
};

if (guessCount === maxGuesses) {
  alert(`К сожалению, Вы исчерпали все попытки. Было загадано число ${secretNumber}.`);
}