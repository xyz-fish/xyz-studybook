// 链表中倒数第K个节点
// -- 正常遍历查找 --
function getKthFromEnd(head, k) {
  let n = 0,
    cur = head

  while (cur) {
    n++
    cur = cur.next
  }

  cur = head
  let i = 0
  while (i + k < n) {
    i++
    cur = cur.next
  }

  return cur
}

// -- 双指正 --
function getKthFromEnd2(head, k) {
  let fast = head,
    slow = head

  while (k > 0) {
    k--
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
