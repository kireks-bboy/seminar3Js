// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени


// function findNumberCube(first, second) {
//   return Math.pow(first, second);
// }
// console.log(findNumberCube(2, 3));
// console.log(findNumberCube(3, 3));




// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


//  function salary(money) {
//   money = money * 0.87;
//   return money * 0.75;
  
//  }
//  const userMoney = Number(prompt('What is your salary?'))
//  let freeMoney = salary(userMoney);
//  if (isNaN(userMoney)) {
//   alert('Нужно писать число!');
// } else {
//   console.log(`Твои свободные деньги ${salary(userMoney)}`);
// }




// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
 
// const userAnswerOne = Number(prompt('Введи первое число!'));
// const userAnswerTwo= Number(prompt('Введи второе число!'));
// const userAnswerThree = Number(prompt('Введи третье число!'));

// function findMaximum(first, second, three) {
//   return Math.max(first, second, three);
// }
// console.log(findMaximum(userAnswerOne, userAnswerTwo, userAnswerThree));












// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// сложение
function sumNum(num1, num2) {
  return (num1 + num2);
}
console.log(sumNum(2,6));


//разность
function ruznostNum(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
}
return num2 - num1;
}
console.log(ruznostNum(12,5));


// умножение
function umnozenieNum(num1, num2) {
  return (num1 * num2);
}
console.log(umnozenieNum(4,4));


// деление
function delenieNum(num1, num2) {
  return (num1 / num2);
}
console.log(delenieNum(60,10));