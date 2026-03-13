import { sortByPinyin } from './src/array/index.js';

const users = [
  { name: '张三', age: 25 },
  { name: '李四', age: 30 },
  { name: '王五', age: 28 },
  { name: '赵六', age: 22 },
  { name: '陈七', age: 35 },
  { name: '刘八', age: 27 },
  { name: '孙九', age: 23 },
  { name: '周十', age: 31 }
];

console.log('=== 原始数组 ===');
console.log(users);
console.log('\n');

const sorted = sortByPinyin(users, 'name');
console.log('=== 按拼音排序后 ===');
console.log(sorted);
console.log('\n');

console.log('=== 排序结果 ===');
sorted.forEach((user, index) => {
  console.log(`${index + 1}. ${user.name} (${user.age}岁)`);
});
