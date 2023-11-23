'use strict';

/*
Создать объект rectangle, который описывает ширину и высоту
(свойства width и height) прямоугольника

Объект должен иметь 2 сеттера для записи ширины и высоты
и два геттера для получения периметра и площади прямоугольника

Сеттеры могут принимать только числа
Геттеры возвращают строку число + "см"пример "40см"

По умолчанию значения высоты и ширины заданы 5 см
*/

const rectangle = {
  width: 5,
  height: 5,
  get perimeter() {
    return `${(this.width + this.height) * 2} см`;
  },
  get square() {
    return `${this.width * this.height} см`;
  },
  set widthRectangle(w) {
    if (!Number.isNaN(+w)) {
      this.width = +w;
    } else {
      console.error('Введено не число');
      return;
    }
  },
  set heightRectangle(h) {
    if (!Number.isNaN(+h)) {
      this.height = +h;
    } else {
      console.error('Введено не число');
      return;
    }
  },
};

rectangle.widthRectangle = 10;
rectangle.heightRectangle = 50;

console.log('Периметр прямоугольника: ', rectangle.perimeter);
console.log('Площадь прямоугольника: ', rectangle.square);
