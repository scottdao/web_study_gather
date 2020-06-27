// 链表交换相邻元素

const list  = require('../data/list.js');

/*
* nextNode
* data
**/
"use strict"
function swapEle(head) {
    let pre, pre.next = {}, head;
    while (pre.next && pre.next.next) {
        let a =   pre.next;
        let b =   a.next;
        pre.next = b;
        b.next = a;
        a.next = b;
        pre = a;
    }
    return pre.next;
}