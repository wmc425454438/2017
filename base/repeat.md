# 重复输出字符串

>（重要的事情说3遍）

- 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串


 - 解题思路：
    - 基础循环


``` js
function repeat(str, num) {
  
  var new_str = '';
  while(num>0){
      new_str += str;
      num--;
  }
    return new_str;
}

repeat("abc", -2);
```
