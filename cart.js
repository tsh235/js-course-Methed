'use strict';

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
