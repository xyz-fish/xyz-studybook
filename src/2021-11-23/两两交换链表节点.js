const { generateList, ListNode } = require('../../linkList')

const exp = generateList([1, 2, 3, 4])

function swapNode(l) {
  const h = new ListNode()
  h.next = l
  let cur = h.next
  let prev = null
  let i = 0
  while (cur && i < 2) {
    let tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
    i++
  }
  console.log(prev, l)
  return prev
}

const exp1 = generateList([1, 2, 3])
swapNode(exp1)

function swapPairs(head) {
  const dummy = new ListNode()
  dummy.next = head

  let cur = dummy.next
  while (cur) {
    let tmp = cur.next.next
    const prev = swapNode(cur)
    prev.next = tmp
    cur.next = prev
    cur = tmp
  }

  console.log(cur, JSON.stringify(dummy.next))
}

swapPairs(exp)
