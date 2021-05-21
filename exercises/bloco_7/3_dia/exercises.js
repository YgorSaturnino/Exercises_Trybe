// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// const expected = sum(4, 5);

// // assert.strictEqual(expected, 9, 'Quatro mais cinco é nove!');
// // assert.strictEqual(expected, 0, 'Zero mais zero é zero!');

// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// const expected = myRemove([1, 2, 3, 4], 5);
// assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Retornou o array com o item');
// console.log(expected);

// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }
//   return arr;
// }

// const expected = myRemoveWithoutCopy([1, 2, 3, 4], 5);
// assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Retornou o array inexperado"');
// console.log(myRemoveWithoutCopy([1, 2, 3, 4], 5));

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// const expected = myFizzBuzz(22);
// assert.strictEqual(expected, 22);
// console.log(expected);

// const assert = require('assert');

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// assert.deepStrictEqual(obj2, obj1);