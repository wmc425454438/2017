# 猴子吃香蕉, 分割数组

>（猴子吃香蕉可是掰成好几段来吃哦）

### 题目描述：

把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];



### 解题思路：
- 普通型：
  - for循环将数字推入新数组中
- 升级版：
  - splice方法，截取数字推入新数组

``` js
function chunk(arr, size) {

  var new_arr = [];
  while(arr.length > 0){
    new_arr.push(arr.splice(0,size));
  }
  return new_arr;
}

chunk(["a", "b", "c", "d"], 2);
```
