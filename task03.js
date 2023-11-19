'use strict';

/*
Добавьте 4-ый опциональный параметр у функции

 4-ый опциональный параметр это строка:
  если функция получает 'even', то функция возвращает массив чётных чисел
  если функция получает 'odd', то функция возвращает массив нечётных чисел

*/

{
  const generateArray = (num, n, m, check = '') => {
    const min = n < m ? n : m;
    const max = n > m ? n : m;
    const arr = [];

    if (n === m) {
      alert(`В указанном диапазоне невозможно получить ${num} случайных целых чисел`);
      return arr;
    }

    
    for (let i = 0; arr.length < num; i++) {
      let number = Math.floor(Math.random() * (max - min + 1)) + min;

      if (check === 'even' && !(number % 2)) {
        arr.push(number);
      } else if (check === 'odd' && number % 2) {
        arr.push(number);
      } else if (check !== 'even' && check !== 'odd') {
        arr.push(number);
      }
    };

    return arr;
  };

  const count = +prompt('Введите количество случайных чисел. Количесво должно быть больше 1:');

  if (!Number.isNaN(count) && count > 0) {
    const n = +prompt('Введите минимальное значение для вывода:');
    const m = +prompt('Введите максимальное значение для вывода:');
    const parityCheck = prompt('Какие числа нужно выводить? Введите even - если четные, odd - если нечетные:')

    if (!(Number.isNaN(n) || Number.isNaN(m))) {
      const randomNumbersArray = generateArray(count, n, m, parityCheck);
      console.log(randomNumbersArray);
      alert(randomNumbersArray.length > 0 ? randomNumbersArray.join(', ') : 'Тут пусто');
    } else {
      alert('Где-то Вы ввели не число');
    }

  } else {
    alert('Вы ввели не число или число меньше 1')
  }
}