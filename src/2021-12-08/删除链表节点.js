const { generateList, ListNode } = require('../../linkList')

function deleteNode(head, val) {
  const dummy = new ListNode()
  dummy.next = head
  let cur = dummy

  while (cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }

  return dummy.next
}

const exp = generateList([1, 2, 3, 4])

const r = deleteNode(exp, 2)

console.log(r)
