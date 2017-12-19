# 检查回文字符串

- 题目描述：
  - 如果给定的字符串是回文，返回true，反之，返回false。
  - 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。


- 解题思路：
 1. 先全部转化为小字母，再去掉干扰因素（用正则）
 2. 再首位进行逐项比较，用递归解决

``` js
function palindrome(str) {
  // 先考虑边界情况
  if(str.length < 2) return true;
  //转化为小字母，去掉干扰因素
  str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  //首尾比较
  if(str[0] !== str[str.length-1]) return false;
  //去掉首尾比较
  return  palindrome(str.slice(1,-1));

}
```

- 第二种：
 1. 先全部转化为小字母，再去掉干扰因素（用正则）
 2. 转化为数组翻转后再变为字符串与原字符串比较

``` js
function palindrome(str) {
  // 判定边界
  if(str.length < 2) return true;
  str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  //转化为数组翻转后再变为字符串与原字符串比较
  return  str === str.split('').reverse().join('');
}
palindrome("race CAr");
```
