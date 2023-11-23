'use strict';

const botNumber = Math.ceil(Math.random() * 100);
console.log('Я загадал число: ', botNumber);

const getUserNumber = () => {
  const userNumber = prompt('Отгадай, какое число от 1 до 100 я загадал. Введи свой вариант:');
  if (userNumber === null) {
    alert('Уже уходите?! Жаль...');
    return;
  }

  if (!Number.isNaN(+userNumber)) {
    if (botNumber > userNumber) {
      alert(`Больше!`);
      getUserNumber();
    } else if (botNumber < userNumber) {
      alert(`Меньше!`);
      getUserNumber();
    } else {
      alert(`Правильно! Игра окончена.`);
      return;
    }
  } else {
    alert('Введи число!');
    getUserNumber();
  }
};

getUserNumber();
