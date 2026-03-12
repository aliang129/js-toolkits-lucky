/**
 * Array Utility Functions
 * @module array
 */

/**
 * 数组去重（使用 Set）
 * @param {Array} arr - 输入数组
 * @returns {Array} 去重后的数组
 */
export function unique(arr) {
  return [...new Set(arr)];
}

/**
 * 数组去重（使用 filter + indexOf）
 * @param {Array} arr - 输入数组
 * @returns {Array} 去重后的数组
 */
export function uniqueByFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

/**
 * 数组去重（使用 Map）
 * @param {Array} arr - 输入数组
 * @returns {Array} 去重后的数组
 */
export function uniqueByMap(arr) {
  const map = new Map();
  return arr.filter((item) => !map.has(item) && map.set(item, true));
}

/**
 * 数组去重（使用 reduce）
 * @param {Array} arr - 输入数组
 * @returns {Array} 去重后的数组
 */
export function uniqueByReduce(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

/**
 * 对象数组去重（根据指定属性）
 * @param {Array} arr - 输入对象数组
 * @param {string} key - 用于去重的属性名
 * @returns {Array} 去重后的数组
 */
export function uniqueByKey(arr, key) {
  const map = new Map();
  return arr.filter((item) => !map.has(item[key]) && map.set(item[key], true));
}

/**
 * 数组扁平化（使用 flat）
 * @param {Array} arr - 输入数组
 * @param {number} [depth=1] - 扁平化深度，默认为 1
 * @returns {Array} 扁平化后的数组
 */
export function flatten(arr, depth = 1) {
  return arr.flat(depth);
}

/**
 * 数组扁平化（使用 reduce + concat）
 * @param {Array} arr - 输入数组
 * @returns {Array} 扁平化后的数组
 */
export function flattenByReduce(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenByReduce(item) : item);
  }, []);
}

/**
 * 数组完全扁平化（无限深度）
 * @param {Array} arr - 输入数组
 * @returns {Array} 完全扁平化后的数组
 */
export function flattenDeep(arr) {
  return arr.flat(Infinity);
}

/**
 * 数组扁平化到指定深度（使用 reduce）
 * @param {Array} arr - 输入数组
 * @param {number} depth - 扁平化深度
 * @returns {Array} 扁平化后的数组
 */
export function flattenDepth(arr, depth) {
  return depth > 0
    ? arr.reduce(
      (acc, item) =>
        acc.concat(
          Array.isArray(item) ? flattenDepth(item, depth - 1) : item
        ),
      []
    )
    : arr.slice();
}

/**
 * 数组分组
 * @param {Array} arr - 输入数组
 * @param {Function|string} key - 分组依据的函数或属性名
 * @returns {Object} 分组后的对象
 */
export function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});
}

/**
 * 数组分块
 * @param {Array} arr - 输入数组
 * @param {number} size - 每块的大小
 * @returns {Array[]} 分块后的数组
 */
export function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * 数组差集（arr1 中有但 arr2 中没有的元素）
 * @param {Array} arr1 - 第一个数组
 * @param {Array} arr2 - 第二个数组
 * @returns {Array} 差集数组
 */
export function difference(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}

/**
 * 数组交集（arr1 和 arr2 都有的元素）
 * @param {Array} arr1 - 第一个数组
 * @param {Array} arr2 - 第二个数组
 * @returns {Array} 交集数组
 */
export function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

/**
 * 数组并集（合并并去重）
 * @param {...Array} arrays - 多个数组
 * @returns {Array} 并集数组
 */
export function union(...arrays) {
  return unique(arrays.flat());
}

/**
 * 数组去重并排序
 * @param {Array} arr - 输入数组
 * @returns {Array} 去重并排序后的数组
 */
export function uniqueSorted(arr) {
  return unique(arr).sort((a, b) => a - b);
}

/**
 * 数组乱序（Fisher-Yates 洗牌算法）
 * @param {Array} arr - 输入数组
 * @returns {Array} 乱序后的数组
 */
export function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * 数组求和
 * @param {Array<number>} arr - 输入数字数组
 * @returns {number} 数组元素之和
 */
export function sum(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

/**
 * 数组求平均值
 * @param {Array<number>} arr - 输入数字数组
 * @returns {number} 数组元素的平均值
 */
export function average(arr) {
  return sum(arr) / arr.length;
}

/**
 * 数组求最大值
 * @param {Array<number>} arr - 输入数字数组
 * @returns {number} 数组元素的最大值
 */
export function max(arr) {
  return Math.max(...arr);
}

/**
 * 数组求最小值
 * @param {Array<number>} arr - 输入数字数组
 * @returns {number} 数组元素的最小值
 */
export function min(arr) {
  return Math.min(...arr);
}

/**
 * 数组查找元素索引
 * @param {Array} arr - 输入数组
 * @param {*} item - 要查找的元素
 * @param {number} [fromIndex=0] - 开始查找的位置
 * @returns {number} 元素的索引，未找到返回 -1
 */
export function indexOf(arr, item, fromIndex = 0) {
  return arr.indexOf(item, fromIndex);
}

/**
 * 数组从后往前查找元素索引
 * @param {Array} arr - 输入数组
 * @param {*} item - 要查找的元素
 * @param {number} [fromIndex=arr.length-1] - 开始查找的位置
 * @returns {number} 元素的索引，未找到返回 -1
 */
export function lastIndexOf(arr, item, fromIndex = arr.length - 1) {
  return arr.lastIndexOf(item, fromIndex);
}

/**
 * 数组是否包含指定元素
 * @param {Array} arr - 输入数组
 * @param {*} item - 要查找的元素
 * @returns {boolean} 是否包含指定元素
 */
export function includes(arr, item) {
  return arr.includes(item);
}

/**
 * 数组查找符合条件的第一个元素
 * @param {Array} arr - 输入数组
 * @param {Function} predicate - 判断函数
 * @returns {*} 符合条件的第一个元素，未找到返回 undefined
 */
export function find(arr, predicate) {
  return arr.find(predicate);
}

/**
 * 数组查找符合条件的所有元素
 * @param {Array} arr - 输入数组
 * @param {Function} predicate - 判断函数
 * @returns {Array} 符合条件的所有元素
 */
export function filter(arr, predicate) {
  return arr.filter(predicate);
}

/**
 * 数组映射
 * @param {Array} arr - 输入数组
 * @param {Function} mapper - 映射函数
 * @returns {Array} 映射后的数组
 */
export function map(arr, mapper) {
  return arr.map(mapper);
}

/**
 * 数组归约
 * @param {Array} arr - 输入数组
 * @param {Function} reducer - 归约函数
 * @param {*} [initialValue] - 初始值
 * @returns {*} 归约结果
 */
export function reduce(arr, reducer, initialValue) {
  return arr.reduce(reducer, initialValue);
}

/**
 * 数组判断是否所有元素都符合条件
 * @param {Array} arr - 输入数组
 * @param {Function} predicate - 判断函数
 * @returns {boolean} 是否所有元素都符合条件
 */
export function every(arr, predicate) {
  return arr.every(predicate);
}

/**
 * 数组判断是否有元素符合条件
 * @param {Array} arr - 输入数组
 * @param {Function} predicate - 判断函数
 * @returns {boolean} 是否有元素符合条件
 */
export function some(arr, predicate) {
  return arr.some(predicate);
}

/**
 * 数组反转
 * @param {Array} arr - 输入数组
 * @returns {Array} 反转后的数组
 */
export function reverse(arr) {
  return [...arr].reverse();
}

/**
 * 数组排序
 * @param {Array} arr - 输入数组
 * @param {Function} [compareFn] - 比较函数
 * @returns {Array} 排序后的数组
 */
export function sort(arr, compareFn) {
  return [...arr].sort(compareFn);
}

/**
 * 数组填充
 * @param {Array} arr - 输入数组
 * @param {*} value - 填充值
 * @param {number} [start=0] - 开始位置
 * @param {number} [end=arr.length] - 结束位置
 * @returns {Array} 填充后的数组
 */
export function fill(arr, value, start = 0, end = arr.length) {
  return [...arr].fill(value, start, end);
}

/**
 * 数组切片
 * @param {Array} arr - 输入数组
 * @param {number} [start=0] - 开始位置
 * @param {number} [end=arr.length] - 结束位置
 * @returns {Array} 切片后的数组
 */
export function slice(arr, start = 0, end = arr.length) {
  return arr.slice(start, end);
}

/**
 * 数组拼接
 * @param {Array} arr - 输入数组
 * @param {...Array} arrays - 要拼接的数组
 * @returns {Array} 拼接后的数组
 */
export function concat(arr, ...arrays) {
  return arr.concat(...arrays);
}

/**
 * 数组删除指定元素
 * @param {Array} arr - 输入数组
 * @param {*} item - 要删除的元素
 * @returns {Array} 删除指定元素后的数组
 */
export function remove(arr, item) {
  return arr.filter((i) => i !== item);
}

/**
 * 数组删除指定索引的元素
 * @param {Array} arr - 输入数组
 * @param {number} index - 要删除的索引
 * @returns {Array} 删除指定索引元素后的数组
 */
export function removeAt(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

/**
 * 数组在指定位置插入元素
 * @param {Array} arr - 输入数组
 * @param {number} index - 插入位置
 * @param {...*} items - 要插入的元素
 * @returns {Array} 插入元素后的数组
 */
export function insert(arr, index, ...items) {
  return [...arr.slice(0, index), ...items, ...arr.slice(index)];
}

/**
 * 数组替换指定位置的元素
 * @param {Array} arr - 输入数组
 * @param {number} index - 替换位置
 * @param {*} item - 替换的元素
 * @returns {Array} 替换元素后的数组
 */
export function replace(arr, index, item) {
  return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
}

/**
 * 数组获取第一个元素
 * @param {Array} arr - 输入数组
 * @returns {*} 第一个元素
 */
export function first(arr) {
  return arr[0];
}

/**
 * 数组获取最后一个元素
 * @param {Array} arr - 输入数组
 * @returns {*} 最后一个元素
 */
export function last(arr) {
  return arr[arr.length - 1];
}

/**
 * 数组获取第 n 个元素
 * @param {Array} arr - 输入数组
 * @param {number} n - 索引位置
 * @returns {*} 第 n 个元素
 */
export function nth(arr, n) {
  return arr[n];
}

/**
 * 数组获取前 n 个元素
 * @param {Array} arr - 输入数组
 * @param {number} n - 元素个数
 * @returns {Array} 前 n 个元素
 */
export function take(arr, n) {
  return arr.slice(0, n);
}

/**
 * 数组获取后 n 个元素
 * @param {Array} arr - 输入数组
 * @param {number} n - 元素个数
 * @returns {Array} 后 n 个元素
 */
export function takeRight(arr, n) {
  return arr.slice(-n);
}

/**
 * 数组去掉前 n 个元素
 * @param {Array} arr - 输入数组
 * @param {number} n - 元素个数
 * @returns {Array} 去掉前 n 个元素后的数组
 */
export function drop(arr, n) {
  return arr.slice(n);
}

/**
 * 数组去掉后 n 个元素
 * @param {Array} arr - 输入数组
 * @param {number} n - 元素个数
 * @returns {Array} 去掉后 n 个元素后的数组
 */
export function dropRight(arr, n) {
  return arr.slice(0, -n);
}

/**
 * 数组去重（处理 NaN）
 * @param {Array} arr - 输入数组
 * @returns {Array} 去重后的数组
 */
export function uniqueWithNaN(arr) {
  return arr.filter((item, index) => {
    return (
      arr.findIndex((i) => {
        return Object.is(i, item);
      }) === index
    );
  });
}

/**
 * 数组去重（使用对象键值对）
 * @param {Array} arr - 输入数组
 * @returns {Array} 去重后的数组
 */
export function uniqueByObject(arr) {
  const obj = {};
  return arr.filter((item) => {
    const key = typeof item + JSON.stringify(item);
    return Object.prototype.hasOwnProperty.call(obj, key)
      ? false
      : (obj[key] = true);
  });
}

/**
 * 数组扁平化（使用递归）
 * @param {Array} arr - 输入数组
 * @returns {Array} 扁平化后的数组
 */
export function flattenByRecursion(arr) {
  const result = [];

  const flatten = (items) => {
    for (const item of items) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  };

  flatten(arr);
  return result;
}

/**
 * 数组扁平化（使用 while 循环）
 * @param {Array} arr - 输入数组
 * @returns {Array} 扁平化后的数组
 */
export function flattenByWhile(arr) {
  let result = [...arr];

  while (result.some((item) => Array.isArray(item))) {
    result = result.flat();
  }

  return result;
}

/**
 * 数组扁平化（使用 toString + split）
 * @param {Array} arr - 输入数组
 * @returns {Array} 扁平化后的数组
 */
export function flattenByString(arr) {
  return arr
    .toString()
    .split(',')
    .map((item) => Number(item));
}
