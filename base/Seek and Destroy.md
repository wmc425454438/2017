# 摧毁数组
>实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。


- 解题思路：
  - 过滤数组中不相等的值，要用到filter。
  - 给出的代码中可以调试出给出的arr是所要操作的数组，后面的参数需要用arguments操作。
  - 先将arguments转化为数组，再用reduce函数对数组中的值进行操作。


``` js
function destroyer(arr) {
  //首先传入的arr只是代表第一个数组的值，后续的参数并没有给出
  //所以要用arguments将参数调用出来，arguments不能当做数组直接调用，要用到call方法
  //先将arguments转化为数组，再使用reduce函数
  //reduce函数是将所有参数转化为一个累计值
  
  return [].slice.call(arguments).reduce(function(pre,cur){
    //过滤掉与当前值不相等的值
    return pre.filter(function(e){
      return e !== cur;
    });
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
