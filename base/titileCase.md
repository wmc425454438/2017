# 句中单词首字母大写

- 题目描述：
  - 确保字符串的每个单词首字母都大写，其余部分小写。
  - 像'the'和'of'这样的连接符同理。

- 解题思路：


#### 第一种
字符串转化为数组，将每个单词的首字母转化为大写，再连接剩余的字符

``` js
function titleCase(str) {
  return str.split(" ").map(e => e[0].toUpperCase()+e.slice(1).toLowerCase()).join(" ");
}
```

中间尝试过将map函数这样写
`map(e => e[0] = e[0].toUpperCase())`
但这样并不会改变字符串的首字母，因为字符串加括号的使用方法不能赋值

 #### 第二种
用正则匹配到字符串的首字母，将首字母改为大写就行了

``` js
function titleCase(str) {
  
  return str.toLowerCase().replace( /(\s|^)[a-z]/g ,e => e.toUpperCase());
}
```
`/(\s|^)[a-z]/g` 表示以空格或者直接字母开头的单词
