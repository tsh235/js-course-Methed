'use strict';

{
  const productName = 'Шуруповерт';
  const productCount = '10';
  const productCategory = 'Инструменты';
  const productPrice = '2459';

  console.log('Наименование товара: ', productName);
  console.log('Общая стоимость товара: ', productCount * productPrice);
}

{
  const productName = 'Дрель';
  const productCount = '13';
  const productCategory = 'Инструменты';
  const productPrice = '5781';

  console.log('Наименование товара: ', productName);
  console.log('Общая стоимость товара: ', productCount * productPrice);
}

{
  const item = prompt('Введите наименование товара', '');
  const count = prompt('Введите количество товара', 0);
  const category = prompt('Введите категорию товара', '');
  const price = prompt('Введите цену товара', 0);

  console.log('count: ', typeof count);
  console.log('price: ', typeof price);
  console.log(typeof (count * price));

  console.log(`На складе ${+count} шт товара "${item}" на сумму ${count * price} руб`);
}