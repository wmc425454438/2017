# 二叉搜索树转化

>输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。


- 解题思路：
    - 1.中序遍历的非递归方法
    - 2.将当前节点的前一个节点记录下来，并赋值双向指针

``` js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree == null) return null;
    var stack = [], //存储节点的栈，当前节点，前一个节点，转化后的新表头（即最左节点）
        node = pRootOfTree,
        pre, 
        head;
    var isfirst = true;//用来判断是否为第一次，即表头的操作
    while(node !== null || stack.length > 0){//全部节点遍历
        while(node){//当前节点的左子树节点全部推入
            stack.push(node)
            node = node.left;
        }
        node = stack.pop();//当前最左节点
        if(isfirst){//是否为二叉树的最左节点
            head = node;
            pre = head;
            isfirst = false;
        }else{//做好双向指针
            pre.right = node;
            node.left = pre;
            pre = node;
        }
        node = node.right;//当前节点的右子节点进入搜索
    }
    return head;//返回链表头
}
```

- 递归解法
``` js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree == null) return null;
    var left = Convert(pRootOfTree.left);//递归左子节点
    var p = left;
    while(p != null && p.right != null) {p = p.right};//找到左子树的最大值
    if(left != null){//左子树不为空时，将当前根节点和左子树的最大节点相连接
        p.right = pRootOfTree;
        pRootOfTree.left = p;
    }
    
    var right = Convert(pRootOfTree.right);//右子树递归
    if(right){//右子树不为空时，将右子树最小节点和当前根节点相连接
        right.left = pRootOfTree;
        pRootOfTree.right = right;
    }
    
    return left !== null ? left : pRootOfTree;//返回头结点，只可能为最左节点或根节点
}
```
