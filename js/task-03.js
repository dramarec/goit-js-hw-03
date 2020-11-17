const findBestEmployee = function(employees) {
    const worksResult = Object.values(employees)
    const workers = Object.keys(employees)
    const bestResult = Math.max(...worksResult);
    const indexBestResult = worksResult.indexOf(bestResult)
    const bestWorker = workers[indexBestResult];
    return bestWorker
};
 console.log(findBestEmployee({ann: 29,david: 35,helen: 1,lorence: 99,})); // lorence
 console.log(findBestEmployee({poly: 12,mango: 17,ajax: 4,})); // mango
 console.log(findBestEmployee({lux: 147, david: 21, kiwi: 19, chelsy: 38,})); // lux

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