'use strict';

/*
Напишите функцию addPrefix 
Функция получает массив в виде параметров и возвращает массив с префиксами
После префикса пробел добавляется автоматически

Входящий массив:
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

Вызов функции:
addPrefix(names, 'Mr')

Результат функции:
['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];
*/

{
const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = ([...names], prefix) => {
  for (const key in names) {
    names[key] = `${prefix} ${names[key]}`;
  }
  
  return names;
}

const namesWithPrefix = addPrefix(names, 'Mr');
console.log('Имена: ', names);
console.log('Имена с префиксом: ', namesWithPrefix);

}