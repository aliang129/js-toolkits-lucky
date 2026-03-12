/**
 * Object Utility Functions
 * @module object
 */

/**
 * 深拷贝函数
 * 支持处理循环引用、Date、RegExp、Map、Set、Symbol 等特殊类型
 * @param {*} target - 要拷贝的目标对象
 * @param {WeakMap} [hash=new WeakMap()] - 用于处理循环引用的 WeakMap
 * @returns {*} 深拷贝后的对象
 */
export function deepClone(target, hash = new WeakMap()) {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  if (hash.has(target)) {
    return hash.get(target);
  }

  const clone = Array.isArray(target) ? [] : {};
  hash.set(target, clone);

  if (target instanceof Date) {
    return new Date(target);
  }

  if (target instanceof RegExp) {
    return new RegExp(target);
  }

  if (target instanceof Map) {
    const mapClone = new Map();
    hash.set(target, mapClone);
    target.forEach((value, key) => {
      mapClone.set(deepClone(key, hash), deepClone(value, hash));
    });
    return mapClone;
  }

  if (target instanceof Set) {
    const setClone = new Set();
    hash.set(target, setClone);
    target.forEach((value) => {
      setClone.add(deepClone(value, hash));
    });
    return setClone;
  }

  const allKeys = Reflect.ownKeys(target);

  for (const key of allKeys) {
    clone[key] = deepClone(target[key], hash);
  }

  return clone;
}

/**
 * 浅拷贝函数
 * @param {*} target - 要拷贝的目标对象
 * @returns {*} 浅拷贝后的对象
 */
export function shallowClone(target) {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  if (Array.isArray(target)) {
    return [...target];
  }

  return { ...target };
}

/**
 * 合并多个对象
 * @param {...Object} objects - 要合并的对象
 * @returns {Object} 合并后的对象
 */
export function merge(...objects) {
  return Object.assign({}, ...objects);
}

/**
 * 深度合并多个对象
 * @param {...Object} objects - 要合并的对象
 * @returns {Object} 深度合并后的对象
 */
export function deepMerge(...objects) {
  const result = {};

  for (const obj of objects) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (
          typeof obj[key] === 'object' &&
          obj[key] !== null &&
          !Array.isArray(obj[key]) &&
          typeof result[key] === 'object' &&
          result[key] !== null &&
          !Array.isArray(result[key])
        ) {
          result[key] = deepMerge(result[key], obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
  }

  return result;
}

/**
 * 获取对象的所有键
 * @param {Object} obj - 输入对象
 * @returns {string[]} 对象的所有键
 */
export function keys(obj) {
  return Object.keys(obj);
}

/**
 * 获取对象的所有值
 * @param {Object} obj - 输入对象
 * @returns {*[]} 对象的所有值
 */
export function values(obj) {
  return Object.values(obj);
}

/**
 * 获取对象的所有键值对
 * @param {Object} obj - 输入对象
 * @returns {Array<[string, *]>} 对象的所有键值对
 */
export function entries(obj) {
  return Object.entries(obj);
}

/**
 * 从键值对数组创建对象
 * @param {Array<[string, *]>} entries - 键值对数组
 * @returns {Object} 创建的对象
 */
export function fromEntries(entries) {
  return Object.fromEntries(entries);
}

/**
 * 检查对象是否包含指定的键
 * @param {Object} obj - 输入对象
 * @param {string} key - 要检查的键
 * @returns {boolean} 是否包含指定的键
 */
export function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * 获取对象的键数量
 * @param {Object} obj - 输入对象
 * @returns {number} 对象的键数量
 */
export function size(obj) {
  return Object.keys(obj).length;
}

/**
 * 检查对象是否为空
 * @param {Object} obj - 输入对象
 * @returns {boolean} 是否为空对象
 */
export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

/**
 * 删除对象中的指定键
 * @param {Object} obj - 输入对象
 * @param {string|string[]} keys - 要删除的键或键数组
 * @returns {Object} 删除指定键后的新对象
 */
export function omit(obj, keys) {
  const keysArray = Array.isArray(keys) ? keys : [keys];
  const result = { ...obj };

  for (const key of keysArray) {
    delete result[key];
  }

  return result;
}

/**
 * 获取对象中的指定键
 * @param {Object} obj - 输入对象
 * @param {string|string[]} keys - 要获取的键或键数组
 * @returns {Object} 包含指定键的新对象
 */
export function pick(obj, keys) {
  const keysArray = Array.isArray(keys) ? keys : [keys];
  const result = {};

  for (const key of keysArray) {
    if (hasKey(obj, key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

/**
 * 冻结对象，使其不可修改
 * @param {Object} obj - 输入对象
 * @returns {Object} 冻结后的对象
 */
export function freeze(obj) {
  return Object.freeze(obj);
}

/**
 * 密封对象，防止添加或删除属性
 * @param {Object} obj - 输入对象
 * @returns {Object} 密封后的对象
 */
export function seal(obj) {
  return Object.seal(obj);
}

/**
 * 检查对象是否被冻结
 * @param {Object} obj - 输入对象
 * @returns {boolean} 是否被冻结
 */
export function isFrozen(obj) {
  return Object.isFrozen(obj);
}

/**
 * 检查对象是否被密封
 * @param {Object} obj - 输入对象
 * @returns {boolean} 是否被密封
 */
export function isSealed(obj) {
  return Object.isSealed(obj);
}

/**
 * 检查对象是否可扩展
 * @param {Object} obj - 输入对象
 * @returns {boolean} 是否可扩展
 */
export function isExtensible(obj) {
  return Object.isExtensible(obj);
}

/**
 * 阻止对象扩展
 * @param {Object} obj - 输入对象
 * @returns {Object} 不可扩展的对象
 */
export function preventExtensions(obj) {
  return Object.preventExtensions(obj);
}

/**
 * 获取对象的原型
 * @param {Object} obj - 输入对象
 * @returns {Object|null} 对象的原型
 */
export function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
}

/**
 * 设置对象的原型
 * @param {Object} obj - 输入对象
 * @param {Object|null} prototype - 新的原型
 * @returns {Object} 设置原型后的对象
 */
export function setPrototypeOf(obj, prototype) {
  return Object.setPrototypeOf(obj, prototype);
}

/**
 * 获取对象的属性描述符
 * @param {Object} obj - 输入对象
 * @param {string} key - 属性键
 * @returns {Object|undefined} 属性描述符
 */
export function getOwnPropertyDescriptor(obj, key) {
  return Object.getOwnPropertyDescriptor(obj, key);
}

/**
 * 获取对象的所有属性描述符
 * @param {Object} obj - 输入对象
 * @returns {Object} 所有属性描述符
 */
export function getOwnPropertyDescriptors(obj) {
  return Object.getOwnPropertyDescriptors(obj);
}

/**
 * 定义对象的属性
 * @param {Object} obj - 输入对象
 * @param {string} key - 属性键
 * @param {Object} descriptor - 属性描述符
 * @returns {Object} 定义属性后的对象
 */
export function defineProperty(obj, key, descriptor) {
  return Object.defineProperty(obj, key, descriptor);
}

/**
 * 定义对象的多个属性
 * @param {Object} obj - 输入对象
 * @param {Object} descriptors - 属性描述符对象
 * @returns {Object} 定义属性后的对象
 */
export function defineProperties(obj, descriptors) {
  return Object.defineProperties(obj, descriptors);
}

/**
 * 对象属性 Base64 加密
 * 对对象中指定字段的内容进行 Base64 加密，返回原对象（引用传递）
 * 兼容浏览器和 Node.js 环境
 *
 * 关键点说明：
 * - 环境兼容性：浏览器使用 window.btoa()，Node.js 使用 Buffer.from().toString('base64')
 * - 中文支持：浏览器使用 unescape(encodeURIComponent(str)) 技巧处理 UTF-8 字符
 * - 非字符串处理：对象/数组使用 JSON.stringify，数字/布尔值转换为字符串
 * - 返回值：直接修改传入的 obj 并返回它（引用传递）
 *
 * @param {Object} obj - 输入对象
 * @param {string} key - 要加密的字段名
 * @returns {Object} 加密后的原对象
 * @example
 * // 浏览器环境
 * const obj = { name: 'hello', age: 18 };
 * encryptBase64(obj, 'name');
 * console.log(obj); // { name: 'aGVsbG8=', age: 18 }
 *
 * // 支持中文
 * const obj2 = { name: '你好' };
 * encryptBase64(obj2, 'name');
 * console.log(obj2); // { name: '5L2g5aW9' }
 *
 * // 处理非字符串类型
 * const obj3 = { data: { a: 1 } };
 * encryptBase64(obj3, 'data');
 * console.log(obj3); // { data: 'eyJhIjoxfQ==' }
 *
 * // Node.js 环境
 * const obj4 = { name: 'hello' };
 * encryptBase64(obj4, 'name');
 * console.log(obj4); // { name: 'aGVsbG8=' }
 */
export function encryptBase64(obj, key) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (!hasKey(obj, key)) {
    return obj;
  }

  const value = obj[key];

  if (value === null || value === undefined) {
    return obj;
  }

  let strValue;

  if (typeof value === 'object') {
    strValue = JSON.stringify(value);
  } else {
    strValue = String(value);
  }

  let encodedValue;

  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    encodedValue = window.btoa(unescape(encodeURIComponent(strValue)));
  } else if (typeof Buffer !== 'undefined') {
    encodedValue = Buffer.from(strValue).toString('base64');
  } else {
    throw new Error('Base64 encoding is not supported in this environment');
  }

  obj[key] = encodedValue;
  return obj;
}

/**
 * 对象属性 Base64 解密
 * 对对象中指定字段的 Base64 加密内容进行解密，返回原对象（引用传递）
 * 兼容浏览器和 Node.js 环境
 *
 * 关键点说明：
 * - 环境兼容性：浏览器使用 window.atob()，Node.js 使用 Buffer.from(str, 'base64').toString('utf-8')
 * - 中文支持：浏览器使用 decodeURIComponent(escape(str)) 技巧处理 UTF-8 字符
 * - JSON 解析：尝试解析 JSON 字符串，失败则返回原字符串
 * - 返回值：直接修改传入的 obj 并返回它（引用传递）
 *
 * @param {Object} obj - 输入对象
 * @param {string} key - 要解密的字段名
 * @returns {Object} 解密后的原对象
 * @example
 * // 浏览器环境
 * const obj = { name: 'aGVsbG8=', age: 18 };
 * decryptBase64(obj, 'name');
 * console.log(obj); // { name: 'hello', age: 18 }
 *
 * // 支持中文
 * const obj2 = { name: '5L2g5aW9' };
 * decryptBase64(obj2, 'name');
 * console.log(obj2); // { name: '你好' }
 *
 * // 处理 JSON 字符串
 * const obj3 = { data: 'eyJhIjoxfQ==' };
 * decryptBase64(obj3, 'data');
 * console.log(obj3); // { data: { a: 1 } }
 *
 * // Node.js 环境
 * const obj4 = { name: 'aGVsbG8=' };
 * decryptBase64(obj4, 'name');
 * console.log(obj4); // { name: 'hello' }
 */
export function decryptBase64(obj, key) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (!hasKey(obj, key)) {
    return obj;
  }

  const value = obj[key];

  if (value === null || value === undefined) {
    return obj;
  }

  let decodedValue;

  if (typeof window !== 'undefined' && typeof window.atob === 'function') {
    try {
      decodedValue = decodeURIComponent(escape(window.atob(String(value))));
    } catch {
      throw new Error('Failed to decode Base64 string');
    }
  } else if (typeof Buffer !== 'undefined') {
    try {
      decodedValue = Buffer.from(String(value), 'base64').toString('utf-8');
    } catch {
      throw new Error('Failed to decode Base64 string');
    }
  } else {
    throw new Error('Base64 decoding is not supported in this environment');
  }

  try {
    const parsed = JSON.parse(decodedValue);
    obj[key] = parsed;
  } catch {
    obj[key] = decodedValue;
  }

  return obj;
}
