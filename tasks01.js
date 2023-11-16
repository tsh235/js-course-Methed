'use strict';

{
  const convertMomey = (money) => {
    const euroToDollar = 1.2;
    const dollarToRub = 73
    let convertMoney = money * euroToDollar * dollarToRub;
  
    return convertMoney;
  };
  
  const purchasePrice = +prompt('Введите стоимость покупки в Евро:');
  
  if (!Number.isNaN(purchasePrice)) {
    const convertPrice = convertMomey(purchasePrice);
    alert(`Стоимость покупки составляет ${convertPrice.toFixed(2)} руб.`);
  } else {
    alert('Вы ввели не число');
  };
}