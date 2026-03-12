/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: liyuehong liyuehong@jxcc.com
 * @Date: 2026-03-05 13:33:50
 */
import { encryptBase64, decryptBase64 } from './src/object/index.js';

const groovyCode = `        import groovy.json.JsonSlurper; 
        import cn.hutool.json.JSONObject; 
        import cn.hutool.json.JSONUtil; 
 
        public class JsonSlurperUtil { 
            public static Object execute(String content){ 
                def jsonSlurper = new JsonSlurper(); 
                def jsonObject = JSONUtil.parseObj(JSONUtil.toJsonStr(jsonSlurper.parseText(content))); 
                return jsonObject; 
            } 
        }`;

console.log('=== 原始代码 ===');
console.log(groovyCode);
console.log('\n');

const obj = { code: groovyCode };
console.log('=== 加密前 ===');
console.log(obj);
console.log('\n');

encryptBase64(obj, 'code');
console.log('=== 加密后 ===');
console.log(obj);
console.log('\n');

decryptBase64(obj, 'code');
console.log('=== 解密后 ===');
console.log(obj);
console.log('\n');

console.log('=== 对比原始和解密后的代码 ===');
console.log('是否完全一致:', groovyCode === obj.code);
console.log('\n');

console.log('=== 解密后的代码内容 ===');
console.log(obj.code);
