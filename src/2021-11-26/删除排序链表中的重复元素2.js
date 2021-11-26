// [1, 1, 2] => [2]     [1, 1, 2, 3, 3] => [2]
const { generateList, ListNode } = require('../../linkList')

// hash
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head
  const hash = []
  const hashRe = []

  let cur = head

  hash.push(head.val)

  while (cur !== null && cur.next !== null) {
    if (hash.indexOf(cur.next.val) !== -1) {
      hashRe.push(cur.next.val)
      cur.next = cur.next.next
    } else {
      hash.push(cur.next.val)
      cur = cur.next
    }
  }

  const dummy = new ListNode()
  dummy.next = head
  cur = dummy
  while (cur.next !== null) {
    if (hashRe.indexOf(cur.next.val) !== -1) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}

const exp = generateList([1, 1, 2, 3, 3])

console.log(deleteDuplicates(exp))

// 双指针

function deleteDuplicates2(head) {
  if (head === null) return null

  const dummy = new ListNode()
  dummy.next = head

  let cur = dummy

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val

      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }

  return dummy.next
}

deleteDuplicates2(generateList([1, 1, 2, 2, 3, 3, 5, 5]))
