# Product of Array Except Self

Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given` [1,2,3,4] `, return` [24,12,8,6] `.

- 题目意思：

就是新建一个数组，这个新数组是之前数组的乘积，但是要除掉当前位置的值。

最简单的思想就是全部乘上，然后除掉数组当前位置的值。但是显然这个方法不好。时间复杂度O(n^2);

下面的方法时间复杂度为2O(n)，是leetcode上最赞的算法。

``` js
var productExceptSelf = function(nums) {
    var res = new Array(4);
    res[0] = 1;
    for(var i = 1 ; i<nums.length; i++){
    	res[i] = res[i - 1] * nums[i - 1];
    }
    var right = 1;
    for(var i = nums.length-1 ; i>=0; i--){
    	res[i] *= right;
    	right *= nums[i];
    }
    return res;
};
```
