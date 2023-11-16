'use strict';

{
  const str = prompt('Введите строку:');

  const modifyStr = string =>  string[0].toUpperCase() + (string.slice(1)).toLocaleLowerCase();

  const updateStr = modifyStr(str.toString());

  alert(`Новая строка: ${updateStr}`);
}