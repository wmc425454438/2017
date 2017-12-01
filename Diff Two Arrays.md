# Diff Two Arrays
>比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。

- 提示数组
  - *Array.filter(), Array.indexOf(), Array.concat()*
  
- 题目解析
  - 提取两个数组中的不相同的数，先从第一个数组中过滤出第二个数组不存在的数，再从第二个数组中提取第一个数组不存在的数。
  - 再将两个提取出的新数组组合在一起。
  
```js

function diff(arr1, arr2) {
  var newArr1 = [];
  var newArr2 = [];
  // Same, same; but different.
  newArr1 = arr1.filter(function(e){
    return arr2.indexOf(e)==-1;
  });
  newArr2 = arr2.filter(function(e){
    return arr1.indexOf(e)==-1;
  });
  return newArr1.concat(newArr2);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

```

这里的代码比较清楚，indexOf代表不在该数组中，两个数组各做一遍，将结果组合。

-------------------------------

- 简化写法

```js

function diff(arr1, arr2) {
  // Same, same; but different.
  return arr1.filter(function(e){
    return arr2.indexOf(e)==-1;
  }).
  concat(
    arr2.filter(function(e){
    return arr1.indexOf(e)==-1;})
  );
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

```

其实就是把concat用在了两个filter中间，很好理解。

----------------------------------------------------

- ES6一句话

```js

function diff(arr1, arr2) {
  // Same, same; but different.
  return arr1.filter(e => arr2.indexOf(e)==-1).concat(arr2.filter( e => arr1.indexOf(e)==-1));
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

```

ES6简化写法
