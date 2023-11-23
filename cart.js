'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promocode) {
    if (typeof promocode === 'string' && promocode === 'METHED') {
      this.discount = 15;
    }

    if (typeof promocode === 'string' && promocode === 'NEWYEAR') {
      this.discount = 21;
    }
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

    return this.discount ?
      (totalPrice -= totalPrice * this.discount / 100).toFixed(2) :
      totalPrice.toFixed(2);
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
cart.setDiscount = 'METHED';

cart.print();

cart.clear();
