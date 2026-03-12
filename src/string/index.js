/**
 * String Utility Functions
 * @module string
 */

/**
 * 将字符串转换为大写
 * @param {string} str - 输入字符串
 * @returns {string} 大写字符串
 */
export function toUpperCase(str) {
  return str.toUpperCase();
}

/**
 * 将字符串转换为小写
 * @param {string} str - 输入字符串
 * @returns {string} 小写字符串
 */
export function toLowerCase(str) {
  return str.toLowerCase();
}

/**
 * 首字母大写
 * @param {string} str - 输入字符串
 * @returns {string} 首字母大写的字符串
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 将字符串转换为驼峰命名
 * @param {string} str - 输入字符串（可以是 kebab-case 或 snake_case）
 * @returns {string} 驼峰命名字符串
 */
export function toCamelCase(str) {
  return str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (char) => char.toLowerCase());
}

/**
 * 将字符串转换为短横线命名
 * @param {string} str - 输入字符串（可以是 camelCase 或 snake_case）
 * @returns {string} 短横线命名字符串
 */
export function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

/**
 * 将字符串转换为下划线命名
 * @param {string} str - 输入字符串（可以是 camelCase 或 kebab-case）
 * @returns {string} 下划线命名字符串
 */
export function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/-/g, '_')
    .toLowerCase();
}

/**
 * 去除字符串两端的空白字符
 * @param {string} str - 输入字符串
 * @returns {string} 去除空白后的字符串
 */
export function trim(str) {
  return str.trim();
}

/**
 * 去除字符串左端的空白字符
 * @param {string} str - 输入字符串
 * @returns {string} 去除左端空白后的字符串
 */
export function trimStart(str) {
  return str.trimStart();
}

/**
 * 去除字符串右端的空白字符
 * @param {string} str - 输入字符串
 * @returns {string} 去除右端空白后的字符串
 */
export function trimEnd(str) {
  return str.trimEnd();
}

/**
 * 检查字符串是否以指定前缀开头
 * @param {string} str - 输入字符串
 * @param {string} prefix - 前缀
 * @returns {boolean} 是否以指定前缀开头
 */
export function startsWith(str, prefix) {
  return str.startsWith(prefix);
}

/**
 * 检查字符串是否以指定后缀结尾
 * @param {string} str - 输入字符串
 * @param {string} suffix - 后缀
 * @returns {boolean} 是否以指定后缀结尾
 */
export function endsWith(str, suffix) {
  return str.endsWith(suffix);
}

/**
 * 检查字符串是否包含指定子串
 * @param {string} str - 输入字符串
 * @param {string} searchStr - 搜索的子串
 * @returns {boolean} 是否包含指定子串
 */
export function includes(str, searchStr) {
  return str.includes(searchStr);
}

/**
 * 替换字符串中的所有匹配项
 * @param {string} str - 输入字符串
 * @param {string|RegExp} search - 搜索的字符串或正则表达式
 * @param {string} replacement - 替换字符串
 * @returns {string} 替换后的字符串
 */
export function replaceAll(str, search, replacement) {
  return str.replaceAll(search, replacement);
}

/**
 * 将字符串重复指定次数
 * @param {string} str - 输入字符串
 * @param {number} count - 重复次数
 * @returns {string} 重复后的字符串
 */
export function repeat(str, count) {
  return str.repeat(count);
}

/**
 * 截取字符串
 * @param {string} str - 输入字符串
 * @param {number} start - 开始位置
 * @param {number} [end] - 结束位置（可选）
 * @returns {string} 截取后的字符串
 */
export function slice(str, start, end) {
  return str.slice(start, end);
}

/**
 * 获取字符串长度
 * @param {string} str - 输入字符串
 * @returns {number} 字符串长度
 */
export function length(str) {
  return str.length;
}

/**
 * 检查字符串是否为空
 * @param {string} str - 输入字符串
 * @returns {boolean} 是否为空字符串
 */
export function isEmpty(str) {
  return str.length === 0;
}

/**
 * 反转字符串
 * @param {string} str - 输入字符串
 * @returns {string} 反转后的字符串
 */
export function reverse(str) {
  return str.split('').reverse().join('');
}

/**
 * 将字符串分割为数组
 * @param {string} str - 输入字符串
 * @param {string} [separator=','] - 分隔符，默认为逗号
 * @returns {string[]} 分割后的数组
 */
export function split(str, separator = ',') {
  return str.split(separator);
}

/**
 * 将数组连接为字符串
 * @param {string[]} arr - 输入数组
 * @param {string} [separator=','] - 分隔符，默认为逗号
 * @returns {string} 连接后的字符串
 */
export function join(arr, separator = ',') {
  return arr.join(separator);
}

/**
 * 截断字符串到指定长度
 * @param {string} str - 输入字符串
 * @param {number} maxLength - 最大长度
 * @param {string} [suffix='...'] - 后缀，默认为省略号
 * @returns {string} 截断后的字符串
 */
export function truncate(str, maxLength, suffix = '...') {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * 移除字符串中的所有空白字符
 * @param {string} str - 输入字符串
 * @returns {string} 移除空白后的字符串
 */
export function removeWhitespace(str) {
  return str.replace(/\s+/g, '');
}

/**
 * 将字符串转换为标题格式（每个单词首字母大写）
 * @param {string} str - 输入字符串
 * @returns {string} 标题格式的字符串
 */
export function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * 生成随机字符串
 * @param {number} [length=8] - 字符串长度，默认为8
 * @returns {string} 随机字符串
 */
export function randomString(length = 8) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * 检查字符串是否为有效的邮箱地址
 * @param {string} str - 输入字符串
 * @returns {boolean} 是否为有效的邮箱地址
 */
export function isEmail(str) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

/**
 * 检查字符串是否为有效的手机号（中国大陆）
 * @param {string} str - 输入字符串
 * @returns {boolean} 是否为有效的手机号
 */
export function isPhone(str) {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(str);
}

/**
 * 检查字符串是否为有效的URL
 * @param {string} str - 输入字符串
 * @returns {boolean} 是否为有效的URL
 */
export function isUrl(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}
