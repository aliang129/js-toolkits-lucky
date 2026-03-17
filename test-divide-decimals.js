import { divideWithDecimals } from './src/number/index.js';

console.log('=== 基本使用 ===');
console.log('divideWithDecimals(10, 3, 2):', divideWithDecimals(10, 3, 2)); // "3.33"
console.log('divideWithDecimals(10, 3, 4):', divideWithDecimals(10, 3, 4)); // "3.3333"
console.log('\n');

console.log('=== 补零 ===');
console.log('divideWithDecimals(10, 4, 2):', divideWithDecimals(10, 4, 2)); // "2.50"
console.log('divideWithDecimals(10, 5, 3):', divideWithDecimals(10, 5, 3)); // "2.000"
console.log('\n');

console.log('=== 整数结果 ===');
console.log('divideWithDecimals(10, 2, 2):', divideWithDecimals(10, 2, 2)); // "5.00"
console.log('divideWithDecimals(10, 1, 4):', divideWithDecimals(10, 1, 4)); // "10.0000"
console.log('\n');

console.log('=== 小数结果 ===');
console.log('divideWithDecimals(7, 2, 3):', divideWithDecimals(7, 2, 3)); // "3.500"
console.log('divideWithDecimals(1, 3, 5):', divideWithDecimals(1, 3, 5)); // "0.33333"
console.log('\n');

console.log('=== 循环小数 ===');
console.log('divideWithDecimals(1, 6, 6):', divideWithDecimals(1, 6, 6)); // "0.166667"
console.log('divideWithDecimals(1, 7, 6):', divideWithDecimals(1, 7, 6)); // "0.142857"
