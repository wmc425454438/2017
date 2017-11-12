# 转化实体

### 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。

- 解题思路：
转化为对应的HTML实体可以用对象的形式来储存，关键字和值相对应。使用replace函数将匹配到的实体转化为对应的HTML实体。

- 相关函数
*Array.replace();

```js
function convert(str) {
  // &colon;&rpar;
  const entityMap = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  };
  
  return str.replace(/[&<>'"]/g,function(matched){
    return entityMap[matched];
  });  
}

convert("Dolce & Gabbana");
```

const是ES6的常量用法，如果浏览器不支持ES6用var也可以。
