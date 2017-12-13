# 检查字符串结尾


- 题目描述：
  - 判断一个字符串(str)是否以指定的字符串(target)结尾。
  - 如果是，返回true;如果不是，返回false。


 - 解题思路：
   - 截取最后target长度的字符与target比较
   - 用到的方法为substr

``` js
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
```
