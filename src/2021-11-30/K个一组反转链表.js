const { generateList, ListNode } = require('../../linkList')

function reverseN(head, n) {
  if (n <= 1) return head
  if (head === null || head.next === null) return head
  let tail = head.next
  let p = reverseN(head.next, n - 1)
  head.next = tail.next
  tail.next = head

  return p
}

function reverse(head, k) {
  let n = 0
  let cur = head
  while (cur) {
    cur = cur.next
    n++
  }

  let dummy = new ListNode()
  dummy.next = head
  let prevCur = dummy
  cur = head

  while (n >= k && cur) {
    let tmp = cur
    prevCur.next = reverseN(cur, k)
    cur = cur.next
    n -= k
    let i = k
    while (i > 0 && prevCur.next) {
      prevCur = prevCur.next
      i--
    }
  }

  return dummy.next
}

const exp1 = generateList([1, 2, 3, 4, 5])

reverse(exp1, 5)
