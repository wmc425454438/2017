# 二叉搜索树后序遍历

- 题目描述：
   - 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
   - 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。


- 解题思路：
   - 二叉搜索树（平衡树）的后序遍历是最后为根节点，剩余的序列分为小于根节点的前半部分和大于根节点的后半部分。
   - 递归函数可以轻松解决。

``` js
function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length == 0) return false;//判断是否为空
    return isLastOrder(sequence,0,sequence.length-1);//第一次判断，输入序列以及起始位和末位
}

function isLastOrder(arr,start,end){
    if(start >= end) return true;//若起始位大于等于末位，说明满足条件，是后序序列
    var i = start;//记录起始位
    while(i<end && arr[i]< arr[end]){//找到序列中第一个大于等于根节点的数的下标
        i++;
    }
    for(var j = i; j < end; j++){//若之后还有小于根节点的数则说明不满足序列条件
        if(arr[j] < arr[end])
            return false;
    }
    return isLastOrder(arr,start,i-1) && isLastOrder(arr,j,end-1);//递归检查左子树和右子树
}
```

1. 先序序列：根左右  => 先序序列判断方法和后序序列相同，只不过是序列的第一个数是根节点
2. 中序序列：左根右  => 满足从小到大排列就是中序序列
3. 后序序列：左右根
