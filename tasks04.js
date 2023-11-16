'use strict';

{
  const calculate = (price = 0, count = 0, promo = '') => {
    let totlatPrice = price;
  
    if (count > 10) {
      totlatPrice -= totlatPrice * 0.03;
    }
  
    if (totlatPrice > 30000) {
      totlatPrice -= (totlatPrice - 30000) * 0.15;
    }
  
    switch (promo) {
      case 'METHED' :
        totlatPrice -= totlatPrice * 0.1;
        break;
      case 'G3H2Z1' :
        totlatPrice > 2000 ? totlatPrice -= 500 : totlatPrice;
        break;
    }
  
    return totlatPrice;
  }
  
  const price = +prompt('Введите общую сумму корзины:');
  const count = +prompt('Введите количество товаров в корзине:');
  const promo = prompt('Введите промокод');

  if (!Number.isNaN(price) && !Number.isNaN(count)) {

    alert(`Стоимость вашей покупки с учетом скидок составляет: ${calculate(price, count, promo)}`);
  } else {
    alert('Вы ввели не корректные данные суммы и количества товаров');
  }
}