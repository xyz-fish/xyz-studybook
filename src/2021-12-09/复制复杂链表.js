const { generateList, ListNode } = require('../../linkList')

function copyRandomList(head) {
  let cur = head
  while (cur) {
    const q = new ListNode(cur.val)
    q.random = cur.random
    q.next = cur.next
    cur.next = q
    cur = q.next
  }

  const newHead = new ListNode()
  newHead.next = head
  let newCur = newHead
  cur = head

  while (cur) {
    newCur.next = cur.next
    cur = cur.next
    if (cur) {
      cur = cur.next
    }
    newCur = newCur.next
  }

  return newCur
}

const exp = generateList([1, 2, 3, 4])

copyRandomList(exp)
