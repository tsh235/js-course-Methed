'use strict';

/*
Напиcать функцию isPrime.
Она принимает число и возвращает true, если число является простым, а в ином случае false.
Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя. 
*/

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) {
        return false;
    }
  }

  return true;
}

const num = +prompt('Введите число:');

if (!Number.isNaN(num)) {
  alert(`Введенное вами число ${isPrime(num) ? 'является простым' : 'не является простым'}`);
} else {
  alert('Вы ввели не число!');
}