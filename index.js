'use strict';

//! Первая задача

const item = prompt('Введите наименование товара', '');
const count = prompt('Введите количество товара', 0);
const category = prompt('Введите категорию товара', '');
const price = prompt('Введите цену товара', 0);

if (Number.isFinite(+count) && Number.isFinite(+price)) {
  console.log(`На складе ${+count} шт товара "${item}" на сумму ${count * price} руб`);
} else {
  console.log('Вы ввели некорректные данные');
}