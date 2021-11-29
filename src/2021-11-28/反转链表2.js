// 反转 left 到 right 之间的节点
const { generateList, ListNode } = require('../../linkList.js')

function reverseN(head, n) {
  if (n < 1) return head
  let tail = head.next
  let p = reverseN(head.next, n - 1)
  head.next = tail.next
  tail.next = head
  return p
}

function reverseBetween(head, left, right) {
  if (head === null || head.next === null || left === right) return head

  const dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  let prev = cur
  let i = 0

  while (i < left) {
    prev = cur
    cur = cur.next
    i++
  }

  const rc = reverseN(cur, right - i)
  prev.next = rc

  return dummy.next
}

const exp = generateList([1, 2, 3, 4])

console.log(reverseBetween(exp, 1, 3))
