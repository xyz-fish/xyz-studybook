const { generateList, ListNode } = require('../../linkList')

// 双指针
function deleteNode(head, val) {
  const dummy = new ListNode()
  dummy.next = head

  let p = dummy
  let cur = dummy.next
  let i = 0
  while (cur) {
    if (cur.val === val) {
      p.next = cur.next
      cur = cur.next.next
    } else {
      p = p.next
      cur = cur.next
    }
  }
  return dummy.next
}

const exp = generateList([1, 2, 3, 4])

deleteNode(exp, 2)

function deleteNodeF(head, val) {
  const dummy = new ListNode()
  dummy.next = head

  let cur = dummy.next
  let i = 0
  while (cur.next) {
    console.log(i++)
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  console.log(dummy)
}

const exp2 = generateList([1, 2, 4])
deleteNodeF(exp2, 4)
