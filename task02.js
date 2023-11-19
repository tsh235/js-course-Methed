'use strict';

/*
Продолжаем работать с предыдущей функцией
Функция принимает еще два параметра n и m
Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массиваm и n включительно
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
*/

{
  const generateArray = (num, n, m) => {
    const min = n < m ? n : m;
    const max = n > m ? n : m;

    const arr = [];
    
    for (let i = 0; i < num; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;

  };

  const count = +prompt('Введите количество случайных чисел. Количесво должно быть больше 1:');

  if (!Number.isNaN(count) && count > 0) {
    const n = +prompt('Введите минимальное значение для вывода:');
    const m = +prompt('Введите максимальное значение для вывода:');

    if (!(Number.isNaN(n) || Number.isNaN(m))) {
      const randomNumbersArray = generateArray(count, n, m);
      console.log(randomNumbersArray);
      alert(randomNumbersArray.join(', '));
    } else {
      alert('Где-то Вы ввели не число');
    }

  } else {
    alert('Вы ввели не число или число меньше 1')
  }
}