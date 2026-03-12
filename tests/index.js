/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: liyuehong 1599552627@qq.com
 * @Date: 2026-03-04 15:14:35
 */

import * as toolkit from 'js-toolkits-lucky';

// 深拷贝（支持循环引用）
const obj = { a: 1, b: { c: 2 } };
obj.b.d = obj; // 循环引用
const cloned = toolkit.object.deepClone(obj);

// 数组去重
const uniqueArr = toolkit.array.unique([1, 2, 2, 3, NaN, NaN]);

// 数组扁平化
const flatArr = toolkit.array.flatten([1, [2, [3, 4]]]);

// 对象数组去重
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' }
];
const uniqueUsers = toolkit.array.uniqueByKey(users, 'id');

