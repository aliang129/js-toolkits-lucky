# JS Toolkits Lucky

一个纯 JavaScript 开源工具包，提供常用的数字、字符串、数组、对象处理和 Base64 加解密功能。

## 特性

- 纯 JavaScript 实现，无 TypeScript 依赖
- 使用 ES Modules，支持现代浏览器和 Node.js
- 完整的 JSDoc 注释，提供智能提示
- ESLint 和 Prettier 代码规范
- 模块化设计，按功能分类
- 支持深拷贝、数组去重、数组扁平化等进阶功能
- Git Hooks 自动校验代码质量

## 安装

```bash
npm install js-toolkits-lucky
```

## 使用方法

### 引入整个工具包

```javascript
import * as toolkit from 'js-toolkits-lucky';

// 使用数字工具
toolkit.number.add(1, 2);
toolkit.number.randomInt(1, 100);

// 使用字符串工具
toolkit.string.toUpperCase('hello');
toolkit.string.toCamelCase('hello-world');

// 使用数组工具
toolkit.array.unique([1, 2, 2, 3]);
toolkit.array.flatten([1, [2, [3, 4]]]);

// 使用对象工具
toolkit.object.deepClone({ a: 1, b: { c: 2 } });
toolkit.object.merge({ a: 1 }, { b: 2 });
```

### 按需引入

```javascript
// 只引入数字工具
import { add, multiply } from 'js-toolkits-lucky/number';

// 只引入字符串工具
import { toUpperCase, toCamelCase } from 'js-toolkits-lucky/string';
```

## API 文档

### 数字工具 (Number Utilities)

#### 基本运算

- `add(a, b)` - 将两个数字相加
- `subtract(a, b)` - 将两个数字相减
- `multiply(a, b)` - 将两个数字相乘
- `divide(a, b)` - 将两个数字相除

#### 数学运算

- `abs(num)` - 计算数字的绝对值
- `ceil(num)` - 向上取整
- `floor(num)` - 向下取整
- `round(num)` - 四舍五入
- `max(...numbers)` - 计算数字的最大值
- `min(...numbers)` - 计算数字的最小值
- `pow(base, exponent)` - 计算数字的幂
- `sqrt(num)` - 计算数字的平方根

#### 随机数

- `randomInt(min, max)` - 生成指定范围内的随机整数

#### 格式化

- `toFixed(num, decimals)` - 将数字格式化为指定小数位数
- `formatThousands(num)` - 将数字转换为千分位格式

#### 类型检查

- `isInteger(num)` - 判断数字是否为整数
- `isFinite(num)` - 判断数字是否为有限数
- `isNaN(num)` - 判断数字是否为 NaN

#### 其他

- `percentage(value, total)` - 计算数字的百分比

### 字符串工具 (String Utilities)

#### 大小写转换

- `toUpperCase(str)` - 将字符串转换为大写
- `toLowerCase(str)` - 将字符串转换为小写
- `capitalize(str)` - 首字母大写
- `toTitleCase(str)` - 将字符串转换为标题格式

#### 命名转换

- `toCamelCase(str)` - 将字符串转换为驼峰命名
- `toKebabCase(str)` - 将字符串转换为短横线命名
- `toSnakeCase(str)` - 将字符串转换为下划线命名

#### 空白处理

- `trim(str)` - 去除字符串两端的空白字符
- `trimStart(str)` - 去除字符串左端的空白字符
- `trimEnd(str)` - 去除字符串右端的空白字符
- `removeWhitespace(str)` - 移除字符串中的所有空白字符

#### 检查

- `startsWith(str, prefix)` - 检查字符串是否以指定前缀开头
- `endsWith(str, suffix)` - 检查字符串是否以指定后缀结尾
- `includes(str, searchStr)` - 检查字符串是否包含指定子串
- `isEmpty(str)` - 检查字符串是否为空
- `isEmail(str)` - 检查字符串是否为有效的邮箱地址
- `isPhone(str)` - 检查字符串是否为有效的手机号（中国大陆）
- `isUrl(str)` - 检查字符串是否为有效的URL

#### 操作

- `replaceAll(str, search, replacement)` - 替换字符串中的所有匹配项
- `repeat(str, count)` - 将字符串重复指定次数
- `slice(str, start, end)` - 截取字符串
- `reverse(str)` - 反转字符串
- `split(str, separator)` - 将字符串分割为数组
- `join(arr, separator)` - 将数组连接为字符串
- `truncate(str, maxLength, suffix)` - 截断字符串到指定长度

#### 工具

- `length(str)` - 获取字符串长度
- `randomString(length)` - 生成随机字符串

### 数组工具 (Array Utilities)

#### 去重

- `unique(arr)` - 数组去重（使用 Set）
- `uniqueByFilter(arr)` - 数组去重（使用 filter + indexOf）
- `uniqueByMap(arr)` - 数组去重（使用 Map）
- `uniqueByReduce(arr)` - 数组去重（使用 reduce）
- `uniqueByKey(arr, key)` - 对象数组去重（根据指定属性）
- `uniqueWithNaN(arr)` - 数组去重（处理 NaN）
- `uniqueByObject(arr)` - 数组去重（使用对象键值对）

#### 扁平化

- `flatten(arr, depth)` - 数组扁平化（使用 flat）
- `flattenByReduce(arr)` - 数组扁平化（使用 reduce + concat）
- `flattenDeep(arr)` - 数组完全扁平化（无限深度）
- `flattenDepth(arr, depth)` - 数组扁平化到指定深度（使用 reduce）
- `flattenByRecursion(arr)` - 数组扁平化（使用递归）
- `flattenByWhile(arr)` - 数组扁平化（使用 while 循环）
- `flattenByString(arr)` - 数组扁平化（使用 toString + split）

#### 分组与分块

- `groupBy(arr, key)` - 数组分组
- `chunk(arr, size)` - 数组分块

#### 集合操作

- `difference(arr1, arr2)` - 数组差集
- `intersection(arr1, arr2)` - 数组交集
- `union(...arrays)` - 数组并集

#### 排序与乱序

- `uniqueSorted(arr)` - 数组去重并排序
- `shuffle(arr)` - 数组乱序（Fisher-Yates 洗牌算法）
- `sortByPinyin(arr, key)` - 按拼音首字母排序对象数组

**sortByPinyin 示例：**

```javascript
import { sortByPinyin } from 'js-toolkits-lucky/array';

const users = [
  { name: '张三', age: 25 },
  { name: '李四', age: 30 },
  { name: '王五', age: 28 },
  { name: '赵六', age: 22 }
];

const sorted = sortByPinyin(users, 'name');
console.log(sorted);
// [
//   { name: '李四', age: 30 },
//   { name: '王五', age: 28 },
//   { name: '张三', age: 25 },
//   { name: '赵六', age: 22 }
// ]
```

**特性：**
- 使用 JavaScript 原生的 `localeCompare` 方法
- 支持中文拼音排序
- 自动处理不同数据类型（转换为字符串）
- 不修改原数组，返回新数组
- `sort(arr, compareFn)` - 数组排序

#### 统计

- `sum(arr)` - 数组求和
- `average(arr)` - 数组求平均值
- `max(arr)` - 数组求最大值
- `min(arr)` - 数组求最小值

#### 查找

- `indexOf(arr, item, fromIndex)` - 数组查找元素索引
- `lastIndexOf(arr, item, fromIndex)` - 数组从后往前查找元素索引
- `includes(arr, item)` - 数组是否包含指定元素
- `find(arr, predicate)` - 数组查找符合条件的第一个元素
- `filter(arr, predicate)` - 数组查找符合条件的所有元素

#### 操作

- `map(arr, mapper)` - 数组映射
- `reduce(arr, reducer, initialValue)` - 数组归约
- `every(arr, predicate)` - 数组判断是否所有元素都符合条件
- `some(arr, predicate)` - 数组判断是否有元素符合条件
- `reverse(arr)` - 数组反转
- `fill(arr, value, start, end)` - 数组填充
- `slice(arr, start, end)` - 数组切片
- `concat(arr, ...arrays)` - 数组拼接

#### 修改

- `remove(arr, item)` - 数组删除指定元素
- `removeAt(arr, index)` - 数组删除指定索引的元素
- `insert(arr, index, ...items)` - 数组在指定位置插入元素
- `replace(arr, index, item)` - 数组替换指定位置的元素

#### 获取元素

- `first(arr)` - 数组获取第一个元素
- `last(arr)` - 数组获取最后一个元素
- `nth(arr, n)` - 数组获取第 n 个元素
- `take(arr, n)` - 数组获取前 n 个元素
- `takeRight(arr, n)` - 数组获取后 n 个元素
- `drop(arr, n)` - 数组去掉前 n 个元素
- `dropRight(arr, n)` - 数组去掉后 n 个元素

### 对象工具 (Object Utilities)

#### 拷贝

- `deepClone(target, hash)` - 深拷贝函数（支持循环引用、Date、RegExp、Map、Set、Symbol）
- `shallowClone(target)` - 浅拷贝函数

#### 合并

- `merge(...objects)` - 合并多个对象
- `deepMerge(...objects)` - 深度合并多个对象

#### 键值操作

- `keys(obj)` - 获取对象的所有键
- `values(obj)` - 获取对象的所有值
- `entries(obj)` - 获取对象的所有键值对
- `fromEntries(entries)` - 从键值对数组创建对象

#### 检查

- `hasKey(obj, key)` - 检查对象是否包含指定的键
- `size(obj)` - 获取对象的键数量
- `isEmpty(obj)` - 检查对象是否为空

#### 选择

- `omit(obj, keys)` - 删除对象中的指定键
- `pick(obj, keys)` - 获取对象中的指定键

#### 对象状态

- `freeze(obj)` - 冻结对象，使其不可修改
- `seal(obj)` - 密封对象，防止添加或删除属性
- `isFrozen(obj)` - 检查对象是否被冻结
- `isSealed(obj)` - 检查对象是否被密封
- `isExtensible(obj)` - 检查对象是否可扩展
- `preventExtensions(obj)` - 阻止对象扩展

#### 原型操作

- `getPrototypeOf(obj)` - 获取对象的原型
- `setPrototypeOf(obj, prototype)` - 设置对象的原型

#### 属性描述符

- `getOwnPropertyDescriptor(obj, key)` - 获取对象的属性描述符
- `getOwnPropertyDescriptors(obj)` - 获取对象的所有属性描述符
- `defineProperty(obj, key, descriptor)` - 定义对象的属性
- `defineProperties(obj, descriptors)` - 定义对象的多个属性

#### Base64 加解密

- `encryptBase64(obj, key)` - 对象属性 Base64 加密
- `decryptBase64(obj, key)` - 对象属性 Base64 解密

**关键特性：**

- **环境兼容性**：
  - 浏览器环境：自动使用 `window.btoa()` 和 `window.atob()`
  - Node.js 环境：自动使用 `Buffer.from()` 和 `Buffer.toString()`
  - 自动检测运行环境并使用对应的 API

- **中文支持**：
  - 浏览器：使用 `unescape(encodeURIComponent(str))` 技巧处理 UTF-8 字符
  - Node.js：`Buffer` 默认支持 UTF-8，无需特殊处理

- **非字符串处理**：
  - 对象/数组：使用 `JSON.stringify` 转换为字符串
  - 数字/布尔值：使用 `String()` 转换为字符串

- **无损编码**：
  - 完美保留空格、缩进、换行符
  - 解密后与原始内容完全一致
  - 适用于任何代码或文本内容

- **引用传递**：
  - 直接修改传入的 `obj` 并返回它
  - 不创建新对象，提高性能
  - 如需保留原对象，可先使用 `{...obj}` 浅拷贝

**使用示例：**

```javascript
import { encryptBase64, decryptBase64 } from 'js-toolkits-lucky/object';

// 基本使用
const obj = { username: 'admin', password: '123456' };
encryptBase64(obj, 'password');
console.log(obj); // { username: 'admin', password: 'MTIzNDU2' }

decryptBase64(obj, 'password');
console.log(obj); // { username: 'admin', password: '123456' }

// 支持中文
const obj2 = { name: '你好' };
encryptBase64(obj2, 'name');
console.log(obj2); // { name: '5L2g5aW9' }

// 处理代码（保留空格和缩进）
const groovyCode = `        import groovy.json.JsonSlurper;
        import cn.hutool.json.JSONObject;

        public class JsonSlurperUtil {
            public static Object execute(String content){
                def jsonSlurper = new JsonSlurper();
                def jsonObject = JSONUtil.parseObj(JSONUtil.toJsonStr(jsonSlurper.parseText(content)));
                return jsonObject;
            }
        }`;

const obj3 = { code: groovyCode };
encryptBase64(obj3, 'code');
console.log(obj3.code); // Base64 编码后的字符串

decryptBase64(obj3, 'code');
console.log(obj3.code); // 完全还原原始代码，包括空格和缩进

// 如果不希望修改原对象
const obj4 = { name: 'hello' };
const result = encryptBase64({ ...obj4 }, 'name');
console.log(obj4); // { name: 'hello' } - 原对象不变
console.log(result); // { name: 'aGVsbG8=' } - 新对象被修改
```

## 开发

### 安装依赖

```bash
npm install
```

### 代码检查

```bash
npm run lint
```

### 自动修复代码问题

```bash
npm run lint:fix
```

### 代码格式化

```bash
npm run format
```

### 检查代码格式

```bash
npm run format:check
```

### Git Hooks

项目已配置 Husky 和 lint-staged，在提交代码时会自动执行以下检查：

1. 对暂存的文件运行 ESLint 检查并自动修复问题
2. 对暂存的文件运行 Prettier 格式化

如果代码不符合规范，提交将被阻止。确保在提交前代码已经通过所有检查。

## 项目结构

```
js-toolkits-lucky/
├── src/
│   ├── number/       # 数字处理工具
│   │   └── index.js
│   ├── string/       # 字符串处理工具
│   │   └── index.js
│   ├── array/        # 数组处理工具
│   │   └── index.js
│   ├── object/       # 对象处理工具
│   │   └── index.js
│   └── index.js      # 主入口文件
├── tests/            # 测试文件
├── docs/             # 文档
├── .eslintrc.js      # ESLint 配置
├── .prettierrc       # Prettier 配置
├── .gitignore        # Git 忽略规则
└── package.json      # 项目配置
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 发布到 npm

### 准备工作

1. **更新 package.json 中的仓库信息**
   - 将 `repository.url` 替换为你的 GitHub 仓库地址
   - 将 `bugs.url` 替换为你的 Issues 地址
   - 将 `homepage` 替换为你的项目主页

### 发布步骤

**注意**：如果你默认登录的是公司的私有 npm 仓库，需要先切换到 npm 公共仓库。

#### 方法 1：使用 .npmrc 文件（推荐）

项目已包含 `.npmrc` 文件，自动使用 npm 公共仓库：

```ini
registry=https://registry.npmjs.org/
```

#### 方法 2：临时指定仓库

```bash
npm publish --registry https://registry.npmjs.org/
```

#### 方法 3：配置 npm 用户

```bash
# 登录 npm 公共仓库
npm login --registry=https://registry.npmjs.org/

# 发布时指定用户
npm publish --registry=https://registry.npmjs.org/
```

#### 方法 4：使用 npm 配置

```bash
# 查看当前配置
npm config list

# 设置公共仓库
npm config set registry https://registry.npmjs.org/

# 发布
npm publish
```

1. **登录 npm 账号**
   ```bash
   npm login
   ```

**重要**：如果你的 npm 账户启用了双因素认证（2FA），需要使用 Access Token 登录。

#### 创建 Access Token

1. 访问 [npmjs.com](https://www.npmjs.com/) 并登录
2. 点击右上角头像 → **Access Tokens**
3. 点击 **Generate New Token**
4. 选择 **Automation** 类型（用于自动化发布）
5. 设置 Token 名称（如：`js-toolkits-lucky-publish`）
6. 选择权限：
   - ✅ **Automation** - 用于 CI/CD 和自动化
   - ✅ **Publish** - 发布包权限
   - ✅ **Bypass 2FA** - **必须勾选这个选项！**（绕过双因素认证）
7. 点击 **Generate Token** 生成令牌
8. **重要**：复制生成的 Token（只显示一次，之后无法再次查看）

**注意**：如果 Token 没有勾选 "Bypass 2FA"，发布时会收到 403 错误。

**方法 5：强制指定 registry（解决公司代理问题）**

如果你的 npm 被公司代理覆盖，可以在发布时强制指定官方 registry：

```bash
# 强制使用 npm 官方仓库
npm publish --registry https://registry.npmjs.org/

# 结合 Token 使用
npm publish --registry https://registry.npmjs.org/ --auth-token your_token_here
```

**方法 6：临时清除公司代理配置**

```bash
# 临时清除代理配置
npm config delete registry

# 设置为官方仓库
npm config set registry https://registry.npmjs.org/

# 发布
npm publish
```

**注意**：这些方法只在当前会话有效，重启终端后会恢复公司配置。

---

#### 使用 Token 的多种方法

**方法 1：使用环境变量（推荐）**

```bash
# Windows PowerShell
$env:NPM_TOKEN="your_token_here"

# Linux/Mac
export NPM_TOKEN="your_token_here"

# 发布时会自动使用
npm publish
```

**方法 2：使用 npm config**

```bash
# 设置 token
npm config set //registry.npmjs.org/:_authToken your_token_here

# 发布
npm publish
```

**方法 3：发布时指定 token**

```bash
# ⚠️ 注意：使用 --auth-token（双横线），不是 --token
npm publish --auth-token your_token_here
```

**方法 4：使用 .npmrc 文件**

项目已包含 `.npmrc.example` 文件，复制并重命名为 `.npmrc`：

```bash
cp .npmrc.example .npmrc
# 然后编辑 .npmrc，将 your_token_here 替换为实际的 Token
```

**方法 5：浏览器登录（当前遇到的问题）**

```bash
npm login --registry=https://registry.npmjs.org/
# 会打开浏览器，按提示完成登录
```

2. **检查包名是否可用**
   ```bash
   npm view js-toolkits-lucky
   ```
   如果显示 404，说明包名可用

3. **发布包**
   ```bash
   npm publish
   ```

4. **发布特定版本**
   ```bash
   npm publish --tag beta
   ```

### 更新版本

修改 [package.json](package.json) 中的 `version` 字段，然后重新发布：

```bash
# 1. 更新版本号（例如：1.0.0 -> 1.0.1）
# 2. 提交代码
git add .
git commit -m "chore: bump version to 1.0.1"
# 3. 推送到 GitHub
git push
# 4. 发布到 npm
npm publish
```

### 注意事项

- 确保包名唯一且未被占用
- 首次发布需要验证邮箱
- 每次发布都需要新的版本号
- 发布前运行 `npm run lint` 确保代码质量
- 本项目为纯 JavaScript ES Modules，无需构建步骤，直接发布源码

## 许可证

MIT
