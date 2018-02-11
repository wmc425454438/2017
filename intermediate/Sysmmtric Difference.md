# 对等差分

### 题目描述
- 数组之间相同的值去除
- 数组之间不同的值留存



### 解题思路
数组之间进行比较，将第一个数组中的值到第二个数组中去比较，如果相同则去除该数字。

比较结束后和第二个数组连接，再和第三个数组比较，以此类推。

最后将数组中的相同数字去除。（因为比较的数组本身可能会有相同的数字）

``` js
function sym(arg) {
    // 参数数组化
    var argArr = [].slice.call(arguments);

    return argArr.reduce(function(accum, e) {
    //accum为迭代数组，e是比较数组，过滤两者相同的数
        return accum.concat(e).filter(function(ele) {
        // 迭代数组中出现该数字，或者当前数组出现该数字
            return accum.indexOf(ele) === -1 || e.indexOf(ele) === -1;
        }).filter(function(e, i, arr) {
        // 因为数组自身有可能存在相同的数，去重
        // 如果找到的数不是在自己位置上出现的第一个数，说明之前已经出现过
            return arr.indexOf(e) === i;
        });
    });
}

sym([1, 2, 3], [5, 2, 1, 4]);

```
