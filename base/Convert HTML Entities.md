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


- 拓展版本

在上面的实体对象的正则对象要一个一个的加入很不方便，新建一个正则对象就可以解决之后的拓展。

```js
function convert(str) {
  // &colon;&rpar;
  var entityMap = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  };

  //新建一个以对象key为基础的正则匹配项，这样再增加更多的实体也比较好拓展了
  var regexp = new RegExp ('['+Object.keys(entityMap).join('')+']','g');

  return str.replace(regexp,function(matched){
    return entityMap[matched];
  });  
}

convert("Dolce & Gabbana");
```

这样之后只需要把实体对象添加完整就可以用这个方法了。
