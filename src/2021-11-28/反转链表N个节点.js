const { generateList, ListNode } = require('../../linkList.js')

function reverseN(head, n) {
  if (head === null) return head
  let cur = head
  let p = head.next
  let prev = null

  while (cur && n > 0) {
    cur.next = prev
    prev = cur
    cur = p
    if (p) p = p.next
    n--
  }

  let q = prev
  while (q.next) {
    q = q.next
  }
  q.next = cur
  return prev
}

const exp = generateList([1, 2, 3, 4])

console.log(reverseN(exp, 5))

function reverseN2(head, n) {
  if (n <= 1) return head
  if (head === null || head.next === null) return head
  let tail = head.next
  let p = reverseN2(head.next, n - 1)
  head.next = tail.next
  tail.next = head
  return p
}

const exp2 = generateList([1, 2, 3, 4])

console.log(reverseN2(exp2, 5))
