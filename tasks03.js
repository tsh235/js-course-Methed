'use strict';

{
  const str = prompt('Введите строку:');

  const reverseString = (str) => {
    return str.split('').reverse().join('');
  }

  alert(`Возвращаю перевернутую строку:
  ${reverseString(str)}
  `);
}