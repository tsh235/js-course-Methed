'use strict';

/*
Напишите функцию генератор массива случайных чисел

Функция принимает один обязательный параметр это количество элементов в массиве
И возвращает массив со случайными числами от одного до 100 включительно.
*/

{
  const generateArray = (num) => {
    const arr = [];
    
    for (let i = 0; i < num; i++) {
      arr.push(Math.ceil(Math.random()*100));
    }
    return arr;
  };

  const count = +prompt('Введите количество случайных чисел. Количесво должно быть больше 1:');

  if (!Number.isNaN(count) && count > 0) {
    const randomNumbersArray = generateArray(count);
    console.log(randomNumbersArray);
    alert(randomNumbersArray.join(', '));
  } else {
    alert('Вы ввели не число или число меньше 1')
  }
}