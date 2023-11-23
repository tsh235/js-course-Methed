'use strict';

/*
Напишите рекурсивную функцию, которая принимает один параметр массив,
генерирует целое число от 0 до 10 включительно и добавляет его в массив.

Каждый раз после добавления нового числа проверяет сумму элементов массива,
если она меньше 50 запускается снова передавая себе массив.
Если сумма 50 или больше, то функция возвращает этот массив.
*/


const foo = (arr) => {
  const n = Math.round(Math.random() * 10);

  arr.push(n);
  console.log('arr: ', arr);

  const summ = arr.reduce((acc, item) => acc + item, 0);
  console.log('summ: ', summ);

  if (summ >= 50) {
    return arr;
  } else {
    return foo(arr);
  }
};

console.log(foo([]));
