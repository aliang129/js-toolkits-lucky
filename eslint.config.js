/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: liyuehong 1599552627@qq.com
 * @Date: 2026-03-04 15:05:44
 */
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        URL: 'readonly',
        window: 'readonly',
        Buffer: 'readonly',
      },
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': 'warn',
    },
  },
];
