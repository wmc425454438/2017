# 比较字符串

>（蛤蟆可以吃队友，也可以吃对手）

- 题目描述：
  - 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

  - 举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。

  - ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。

  - ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。




- 解题思路：
  - 把第二个字符串中的每个字符去第一个字符串找一下就行了。
  - 主要用到的是split，every，indexof



``` js
function mutation(arr) {
  //先把字符串小写，再把第二个字符串转化为数组
  var sourceStr = arr[0].toLowerCase();
  var targetArr = arr[1].toLowerCase().split("");
  
  //every函数可以检测数组中的每个元素是否符合给定的要求，如果不符合则返回false；
  return targetArr.every(function(e){
    //index返回值是下标，如果是首位为0所以要加1
    return sourceStr.indexOf(e)+1;
     
  });
  
}

mutation(["hello", "Hello"]);
```
