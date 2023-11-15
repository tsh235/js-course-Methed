'use strict';

//! Вторая задача
const rain = Math.round(Math.random());
console.log('rain: ', rain);

/*
  if (rain === 1) {
    console.log('Пошел дождь. Возьмите зонт!');
  } else {
    console.log('Дождя нет!');
  }
*/

// в данном случае можно также проверить таким способом
if (rain) {
  console.log('Пошел дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}


//! Третья задача
const pointMath = prompt('Введите кол-во баллов по математике:', 0);
const pointRuss = prompt('Введите кол-во баллов по русскому языку:', 0);
const pointInform = prompt('Введите кол-во баллов по информатике:', 0);

if (Number.isFinite(+pointMath) && Number.isFinite(+pointRuss) && Number.isFinite(+pointInform)) {
  const points = +pointMath + +pointRuss + +pointInform;

  console.log( points >= 265 ? `Поздравляю, Вы поступили на бюджет!` : '' );
} else {
  console.log('Введите корректные данные');
}


//! Четвертая задача
const cash = prompt('Какую сумму вы хотите снять?');

if (Number.isFinite(+cash)) {
  console.log(cash % 100 ? 'К сожалению, банкомат не может выдать вам эту сумму' : 'Получите ваши деньги');
} else {
  console.log('Вы ввели некорректную сумму');
}
