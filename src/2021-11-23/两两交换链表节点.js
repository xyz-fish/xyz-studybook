const { generateList, ListNode } = require('../../linkList')

const exp = generateList([1, 2, 3, 4])

function swapNode(l) {
  if (l === null || l.next === null) return l
  const h = new ListNode()
  h.next = l
  let cur = h.next
  let prev = l.next.next
  let i = 0
  while (cur && i < 2) {
    let tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
    i++
  }
  return prev
}

function swapPairs(head) {
  let cur = head
  let dummy = new ListNode()
  let prev = dummy
  while (cur !== null && cur.next !== null) {
    let tmp = cur.next.next
    prev.next = swapNode(cur)
    cur = tmp
    prev = prev.next.next
  }

  return dummy.next
}

swapPairs(exp)
