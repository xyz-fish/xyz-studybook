const { generateList, ListNode } = require('../../linkList')

function swapNodes(head, k) {
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  let prev = dummy

  while (k--) {
    cur = cur.next
  }
  const tmp1 = cur
  const tmpVal1 = cur.val

  while (cur !== null) {
    cur = cur.next
    prev = prev.next
  }
  let tmpVal2 = prev.val
  prev.val = tmpVal1
  tmp1.val = tmpVal2

  return dummy.next
}

var l = generateList([1, 2, 3, 4, 5, 6, 7])

swapNodes(l, 3)
