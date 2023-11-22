'use strict';

/*
Создайте объект cart — корзина

Объект будет содержать следующие свойства:
  items = пустой массив - это товары
  totalPrice = 0 - общая стоимость корзины
  count = 0 - количество товаров

и методы
  getTotalPrice - получить общую стоимость товаров
  add - добавить товар
  increaseCount - увеличить количество товаров
  calculateItemPrice - посчитать общую стоимость товаров
  clear - очистить корзину
  print - распечатать корзину

Описание каждого метода

getTotalPrice()
метод возвращает значение свойства totalPrice

calculateItemPrice()
пересчитывает стоимость всей корзины и записывает значение в totalPrice

increaseCount()
Принимает один параметр(число)
Увеличивает свойство count на это число

add()
Принимает три параметра:
  название товара
  цену товара
  количество товара (опциональный параметр, по умолчанию 1 товар)

этот метод формирует объект из полученных параметров
и добавляет его в свойство items
так же вызывает все необходимые методы
чтобы свойства count и totalPrice были актуальные

clear()
Очищает полностью нашу корзину, возвращает все значения в изначальные

print()
Выводит в консоль JSON строку из массива items
и на следующей строке выводит общую стоимость корзины

Для проверки работы функционала добавить 3 или более товаров в корзину
После вызвать метод print для вывода информации в консоль
*/

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, count = 1) {
    this.items.push({
      name,
      price,
      count,
    });
    this.increaseCount(count);
  },
  increaseCount(count) {
    this.count += count;
  },
  calculateItemPrice() {
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price * item.count;
    });

    return totalPrice;
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины составляет ${this.totalPrice}`);
  },
};

cart.add('Молоко', '89', '3');
cart.add('Хлеб', '41', '2');
cart.add('Масло', '280');

cart.print();

cart.clear();
