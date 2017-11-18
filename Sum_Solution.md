## 求1-N的和


### 题目描述

>求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。


### 解题思路

- 循环语句第一反应可以用递归来进行替换，但是递归需要边界条件。但同时判断用的函数也不允许使用。
这里可以考虑使用 `&&` 与运算。来进行判断，算法很简单，就是需要想到替换的东西。


``` javascript
function Sum_Solution(n)
{
    // write code here
    var sum = n;
    sum && ( sum += Sum_Solution(n - 1));
    return sum;
}
```

`&&` 与运算当前一个条件不满足的时候就不会运行下一个条件的内容。
