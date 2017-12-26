# 更新库存

### 算法描述

依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组。如果货物已存在则更新数量。如果没有对应货物则把其加入到数组中，更新最新的数量。
返回当前的库存数组，且按货物名称的字母顺序排列。

仓库示例代码
``` js
// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
```

### 算法解析

首先仓库数据存储方式是用二维数组进行存储。

根据题目意思，大概分为四步：
1. 新数组和原数组匹配
2. 有相同数据，则库存相加
3. 无相同数据，则添加库存
4. 根据首字母排序

``` js
function updateInventory(arr1, arr2) {
  // 循环匹配数组
  for(var i = 0; i < arr2.length; i++){
  // 判断产品是否在原数组中，存在则更新，不存在添加
    var index = isItemindexOfArray(arr1, arr2[i]);
    if(index == -1){
      arr1.push(arr2[i]);
    }
    else{
      arr1[index][0] += arr2[i][0];
    }
  }   
  // 根据产品首字母排序
  return arr1.sort(function(a,b){
    return a[1]>b[1];
  });
}

//arr二维数组中是否存在item数组，如果存在返回下标，如果不存在则返回-1
function isItemindexOfArray(arr,item){
  for(var i = 0; i< arr.length; i++){
    if(arr[i][1]===item[1]){
      return i;
    }
  }
  return -1;
}

// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```
