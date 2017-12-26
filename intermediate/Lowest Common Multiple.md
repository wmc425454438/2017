# 多个数字的最小公倍数

### 题目描述
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。

### 题目解析
多个数字的最小公倍数，其实可以拆分开来看。

先做前两个的最小公倍数，再将得到的最小公倍数和第三个数字求最小公倍数。以此类推，可以得到多个数字的最小公倍数。

因为：

最小公倍数 = 两个数的乘积/最大公约数

所以，这里要用到辗转相除法。
``` js
function gcd(a, b){
  if(b === 0) return a;
  return gcd(b, a % b);
}
```

求两个数字相除的余数，再用较小的数再与余数再求余数。


整体代码如下：
``` js
function smallestCommons(arr) {
//先把数组补足
  var new_arr = [];
  var max = Math.max.apply(null,arr);
  var min = Math.min.apply(null,arr);
  for(var i = min;i <= max; i++){
    new_arr.push(i);
  }
//运用reduce方法，求最小公倍数
  return new_arr.reduce(function(pre,next){
    return pre * next/gcd(pre, next);
  });
}

function gcd(a,b){
  if(b === 0) return a;
  return gcd(b, a % b);
}

smallestCommons([1,5]);
```

`reduce`方法输入为一个数组，输出为一个数字。具体见MDN
