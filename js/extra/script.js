// // ===================================================================================================
// 01
// // ===================================================================================================

// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// 'use strict';

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}\n`);
// }
// 
// for bot
// console.table(user);
// let message = '';

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key}: ${user[key]}\n`;
//   // console.log('key :>>', key);
// }
// console.log(message);
// // console.table(user);
// // ===================================================================================================
// 02
// // ===================================================================================================
// // Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
//  'use strict';
// const countProps = function(obj) {
//     const values = Object.values(obj);
//     return values.length
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// // ===================================================================================================
// 03
// // ===================================================================================================
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
// 'use strict';

// const findBestEmployee = function(employees) {
//     const worksResult = Object.values(employees)
//     // console.log(worksResult);
//     const workers = Object.keys(employees)
//     // console.log(workers);
//     const bestResult = Math.max(...worksResult);
//     // console.log(Math.max(...worksResult));
//     const indexBestResult = worksResult.indexOf(bestResult)
//     // console.log(worksResult.indexOf(bestResult));
//     const bestWorker = workers[indexBestResult];
//     //  console.log(workers[indexBestResult]);
  
//     return bestWorker
  
// // -------
//     // let bestWorker = '';
//     // let max = 0;
//     // for (const key in employees) {
//     //   if (employees[key] > max) {
//     //     max = employees[key];
//     //     bestWorker = key;
//     //   }
//     // }
//     // return bestWorker;
// };

// // // /*
// // //  * Вызовы функции для проверки работоспособности твоей реализации.
// // //  */
//  console.log(findBestEmployee({ann: 29,david: 35,helen: 1,lorence: 99,})); // lorence
 
//  console.log(findBestEmployee({poly: 12,mango: 17,ajax: 4,})); // mango
 
//  console.log(findBestEmployee({lux: 147, david: 21, kiwi: 19, chelsy: 38,})); // lux
// ===================================================================
// const findBestEmployee = function (employees) {
//   let bestWorker = '';
//   let max = 0;
//   for (const worker in employees) {
//     if (employees[worker] > max) {
//       console.log(employees[worker]);
//       // max = employees[worker];
//       // bestWorker = worker;
//     }
//   }
//   return bestWorker;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// }; 
// console.log(findBestEmployee(developers)); 
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// }; 
// console.log(findBestEmployee(supports)); 
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// }
// console.log(findBestEmployee(sellers)); 
// // 'lux'  


// // ===================================================================================================
// 04
// // ===================================================================================================
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// 'use strict'

// const countTotalSalary = function(employees) {
//   let total = 0;
//   const salaryArr = Object.values(employees);
//   for (const salary of salaryArr) {
//     total += salary;
//   }
//   // ----
//   // for (const key in employees) {
//   //   total += employees[key];
//   // }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400


// // ===================================================================================================
// 05
// // ===================================================================================================

// // Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// 'use strict'
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   // console.table(products);
//   const result = [];

//   for (const object of arr) {
//     if (prop in object) {
//       result.push(object[prop])
//     }
//     // 
//     // for (const key in object) {
//     //   if (key === prop) {
//     //     result.push(object[key]);
//     //   }
//     // }
//   }
//   return result;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'price')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
// =============================================================
// function getAllPropValues (array, prop) {
//   'use strict';
//   // Write code under this line 
//     const result = [];
//   for (const object of array) {
//     if (prop in object) {
//       result.push(object[prop])
//     }
//   }
//   return result;

// }

// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ]; 

// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity'));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category'));
// //  []


// // ===============================================================================================
// 06
// // ===============================================================================================

// // Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// // Вызовы функции для проверки работоспособности твоей реализации.
// 'use strict';

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];


// const calculateTotalPrice = function (allProducts, productName) {
//   for (const object of allProducts) {
//     const key = 'name'
//     if (object[key] === productName) {
//       return object.price * object.quantity
//     }
//   }
// };

// const calculateTotalPrice = function (allProducts, productName) {
//   for (const object of allProducts) {
//     for (const key in object) {
//       if (object[key] === productName) {
//         return object.price * object.quantity
//       }
//     }
//   }
// };

// const calculateTotalPrice = function (allProducts, productName) {
//   let result = 0;
//   for (const object of allProducts) {
//     if (object['name'] === productName) {
//       let mult = object.price * object.quantity;
//       result += mult;
//     }
//   }
//   return result;
// };

// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// // =================================

// function calculateTotalPrice (array, prop) {
//   'use strict';
//   // Write code under this line
//   let result = 0;
//   for (const object of array) {
//     if (object['name'] === prop) {
//       let mult = object.price * object.quantity;
//       result += mult;
//     }
//   }
//   return result
// }

// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 }
// ]; 

// console.log(calculateTotalPrice(products, 'Радар'));  
// // 9080

// console.log(calculateTotalPrice(products, 'Сканер')); 
// // 10200

// console.log(calculateTotalPrice(products, 'Захват'));
// // 2400

// console.log(calculateTotalPrice(products, 'Дроид')); 
// // 2800