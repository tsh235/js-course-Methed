'use strict';

/*
Напишите функцию filter()
функция принимает в параметрах 2 массива
Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

Результат функции: массив из всех студентов, которые сдали экзамен.
*/

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = ([...all], [...failed]) => {
  for (const item of failed) {
    all.splice(all.indexOf(item), 1);
  }

  return all;
};

const students = filter(allStudents, failedStudents);
console.log('Список всех студентов: ', allStudents);
console.log('Список студентов, не сдавших экзамен: ', failedStudents);
console.log('Студенты, которые сдали экзамен: ', students);