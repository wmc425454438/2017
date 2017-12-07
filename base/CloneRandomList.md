# 复制复杂链表

### 题目描述
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
返回结果为复制后复杂链表的head。
（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）


- 解题思路：
    - 1.将一个节点看做一个对象
    - 2.递归方式复制链表
    - 3.先复制链表值和随机指针，再复制next指针


``` js
/*function RandomListNode(x){  ·
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
    if(pHead == null)return null;//判断是否为空
    
    var newHead = new RandomListNode(pHead.label);//新建一个函数对象链表头
    
    newHead.random = pHead.random;//先复制随机指针，再递归复制next指针
    newHead.next = Clone(pHead.next);
    
    return newHead;
}
```
