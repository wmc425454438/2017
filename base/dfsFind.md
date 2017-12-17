# 深度遍历

#### 题目描述

``` js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
```

1. 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
2. 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

#### 注意点：
1. 是根节点到叶节点形成的节点
2. 所有路径

#### 解题思路：
1. 深度遍历，递归
2. 记录当前节点的值以及与祖先节点的和


``` js
function FindPath(root, expectNumber)
{
    // write code here
    var result = [];
    if(root == null) return result;
    dfsFind(root, expectNumber, 0, [], result);//需要的参数（当前节点，目标值，值的和，当前节点的路径，满足条件的返回值）
    return result;
}

function dfsFind(root, expectNumber, currentSum, path, result){
    currentSum += root.val;//记录所有节点的和
    
    path.push(root.val);//记录路径
    
    if(root.left == null && root.right == null && currentSum == expectNumber)//满足根节点到叶节点的所有值的和为目标值
        result.push(path.concat());//浅拷贝当前路径（slice(0)也可以）
    
    if(root.left != null)//左子树遍历
        dfsFind(root.left, expectNumber, currentSum, path, result);
    
    if(root.right != null)//右子树遍历
        dfsFind(root.right, expectNumber, currentSum, path, result);
    
    path.pop();//推出当前节点
}
```
