const Heap = require('../Heap')

// 方法1: 根据反转链表 进行插入操作
function sortList(head) {
  let cur = head,
    prev = null

  while (cur) {
    let tmp = cur.next

    // prev 是null || cur节点值大一 prev头节点的值
    if (prev === null || prev.val > cur.val) {
      cur.next = prev
      prev = cur
    } else {
      let curP = prev
      // * 循环到 [1 2, 4] [3, 5] cur: 2
      while (curP.next && curP.next.val < cur.val) {
        curP = curP.next
      }

      cur.next = curP.next

      curP = cur
    }

    cur = tmp
  }

  return prev
}

// 方法2: 小顶堆 扫入每个节点
var sortList = function (head) {
  let cur = head,
    n = 0,
    h = new Heap((a, b) => a.val < b.val)
  while (cur) {
    h.push(new ListNode(cur.val))
    cur = cur.next
    n++
  }

  const tail = new ListNode()
  cur = tail
  for (let i = 0; i < n; i++) {
    cur.next = h.pop()
    cur = cur.next
  }

  return tail.next
}

// 归并： 查分 递归 合并
function mergeList(head, tail) {
  if (head === null) return head

  // * 一个节点的时候直接返回该节点
  if (head.next === tail) {
    head.next = null
    return head
  }
  // * 拆分链表的方法
  // start
  let slow = head
  let fast = head

  while (fast !== tail) {
    slow = slow.next
    fast = fast.next

    if (fast !== tail) {
      fast = fast.next
    }
  }

  // end

  // * 合并
  const l = mergeList(head, slow)
  const r = mergeList(slow, tail)

  const dummy = new ListNode()

  let lc = l,
    rc = r,
    c = dummy

  while (lc && rc) {
    if (lc.val < rc.val) {
      c.next = lc
      lc = lc.next
    } else {
      c.next = rc
      rc = rc.next
    }

    c = c.next
  }
  if (lc) {
    c.next = lc
  } else if (rc) {
    c.next = rc
  }

  return dummy.next
}

var sortList = function (head) {
  return mergeList(head, null)
}
