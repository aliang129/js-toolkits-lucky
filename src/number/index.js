/**
 * Number Utility Functions
 * @module number
 */

/**
 * 将两个数字相加
 * @param {number} a - 第一个数字
 * @param {number} b - 第二个数字
 * @returns {number} 两数之和
 */
export function add(a, b) {
  return a + b;
}

/**
 * 将两个数字相减
 * @param {number} a - 被减数
 * @param {number} b - 减数
 * @returns {number} 两数之差
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * 将两个数字相乘
 * @param {number} a - 第一个数字
 * @param {number} b - 第二个数字
 * @returns {number} 两数之积
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * 将两个数字相除
 * @param {number} a - 被除数
 * @param {number} b - 除数
 * @returns {number} 两数之商
 * @throws {Error} 当除数为0时抛出错误
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * 计算数字的绝对值
 * @param {number} num - 输入数字
 * @returns {number} 数字的绝对值
 */
export function abs(num) {
  return Math.abs(num);
}

/**
 * 向上取整
 * @param {number} num - 输入数字
 * @returns {number} 向上取整后的数字
 */
export function ceil(num) {
  return Math.ceil(num);
}

/**
 * 向下取整
 * @param {number} num - 输入数字
 * @returns {number} 向下取整后的数字
 */
export function floor(num) {
  return Math.floor(num);
}

/**
 * 四舍五入
 * @param {number} num - 输入数字
 * @returns {number} 四舍五入后的数字
 */
export function round(num) {
  return Math.round(num);
}

/**
 * 计算数字的最大值
 * @param {...number} numbers - 数字列表
 * @returns {number} 最大值
 */
export function max(...numbers) {
  return Math.max(...numbers);
}

/**
 * 计算数字的最小值
 * @param {...number} numbers - 数字列表
 * @returns {number} 最小值
 */
export function min(...numbers) {
  return Math.min(...numbers);
}

/**
 * 生成指定范围内的随机整数
 * @param {number} min - 最小值（包含）
 * @param {number} max - 最大值（包含）
 * @returns {number} 随机整数
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 将数字格式化为指定小数位数
 * @param {number} num - 输入数字
 * @param {number} decimals - 小数位数
 * @returns {number} 格式化后的数字
 */
export function toFixed(num, decimals = 2) {
  return Number(num.toFixed(decimals));
}

/**
 * 判断数字是否为整数
 * @param {number} num - 输入数字
 * @returns {boolean} 是否为整数
 */
export function isInteger(num) {
  return Number.isInteger(num);
}

/**
 * 判断数字是否为有限数
 * @param {number} num - 输入数字
 * @returns {boolean} 是否为有限数
 */
export function isFinite(num) {
  return Number.isFinite(num);
}

/**
 * 判断数字是否为 NaN
 * @param {number} num - 输入数字
 * @returns {boolean} 是否为 NaN
 */
export function isNaN(num) {
  return Number.isNaN(num);
}

/**
 * 计算数字的幂
 * @param {number} base - 底数
 * @param {number} exponent - 指数
 * @returns {number} 幂运算结果
 */
export function pow(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * 计算数字的平方根
 * @param {number} num - 输入数字
 * @returns {number} 平方根
 * @throws {Error} 当数字为负数时抛出错误
 */
export function sqrt(num) {
  if (num < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(num);
}

/**
 * 计算数字的百分比
 * @param {number} value - 数值
 * @param {number} total - 总数
 * @returns {number} 百分比值
 */
export function percentage(value, total) {
  if (total === 0) {
    throw new Error('Total cannot be zero');
  }
  return (value / total) * 100;
}

/**
 * 将数字转换为千分位格式
 * @param {number} num - 输入数字
 * @returns {string} 千分位格式的字符串
 */
export function formatThousands(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 数字相除并保留指定小数位数
 * @param {number} divisor - 除数
 * @param {number} dividend - 被除数
 * @param {number} decimals - 保留的小数位数
 * @returns {string} 保留指定小数位数的字符串（不够时补零）
 * @example
 * // 基本使用
 * divideWithDecimals(10, 3, 2); // "3.33"
 * divideWithDecimals(10, 3, 4); // "3.3333"
 *
 * // 补零
 * divideWithDecimals(10, 4, 2); // "2.50"
 * divideWithDecimals(10, 5, 3); // "2.000"
 *
 * // 整数结果
 * divideWithDecimals(10, 2, 2); // "5.00"
 */
export function divideWithDecimals(divisor, dividend, decimals) {
  if (dividend === 0) {
    throw new Error('Division by zero is not allowed');
  }

  const result = divisor / dividend;
  return result.toFixed(decimals);
}
