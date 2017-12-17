# 找出最长单词


- 题目描述：
  - 在句子中找出最长的单词，并返回它的长度。
  - 函数的返回值应该是一个数字。


- 解题思路：
  - 1.将一个字符串解体成多个单词数组
  - 2.将数组内容转化为单词长度
  - 3.利用max函数找出最大值


``` js
function findLongestWord(str) {
  return Math.max.apply(null ,str.split(" ").map(e => e.length));
}

findLongestWord("May the force be with you");
```

> map函数可以新建一个数组，将原数组做出更改后存入生成的新数组，并不影响原数组
