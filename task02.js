'use strict';

/*
Напишите функцию getAverageValue
для получения среднеарифметического значения
с округлением в меньшую сторону до целого числа

С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:
const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
*/

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = ([...arr]) => {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  sum /= arr.length;
  
  return Math.floor(sum);
}

const averageValue = getAverageValue(allСashbox);

console.log('Суммы чеков за день: ', allСashbox.join(', '));
console.log('Колличество чеков за день: ', allСashbox.length);
console.log('Средний чек за день составляет: ', averageValue);