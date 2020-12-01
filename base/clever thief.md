# 打家劫舍

> 连续两家不能进行偷窃，求一个数组中给出的可以偷窃的最大的数字。

``` js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;

    if(len == 0)
    return 0;

    if(len == 1)
    return nums[0];

    var prev2 = nums[0];
    var prev = Math.max(nums[0], nums[1]);

    if(len == 2)
    return prev;
    
    for(let i = 2; i < len; i++) {
        var temp = prev;
        prev = Math.max(prev, prev2 + nums[i]);
        prev2 = temp;
    }

    return prev;

};
```
