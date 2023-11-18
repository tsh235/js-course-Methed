'use strict';

/*
Напишите функцию getAveragePriceGoods для получения средней цены товара

Дан многомерный  массив:

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];


В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
Необходимо посчитать среднюю стоимость одного товара в магазине.
*/

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = ([...arr]) => {

  for (const key in arr) {
    arr[key] = +(arr[key][1] / arr[key][0]).toFixed(2);
  };

  let averagePrice = 0;

  for (const item of arr) {
    averagePrice += item;
  }

  return +(averagePrice / arr.length).toFixed(2);
  
}

const averagePriceGoods = getAveragePriceGoods(allСashbox);
console.log('Средняя стоимость одного товара в магазине составляет: ', averagePriceGoods);