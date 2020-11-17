const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  for (const object of allProducts) {
    const key = 'name'
    if (object[key] === productName) {
      return object.price * object.quantity
    }
  }
};
console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800

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