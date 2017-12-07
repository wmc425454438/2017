# 过滤数组假值

>（真假美猴王）

- 删除数组中的所有假值。
  - 在JavaScript中，假值有false、null、0、""、undefined 和 NaN。

- 解题思路：
  - 过滤掉数组中的假值，用filter函数



``` js
function bouncer(arr) {
  // Boolean函数接受一个参数，若为假值则会过滤掉
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
```
