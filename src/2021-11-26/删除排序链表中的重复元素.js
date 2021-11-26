// [1, 1, 2] => [1, 2]     [1, 1, 2, 3, 3] => [1, 2, 3]
const { generateList, ListNode } = require('../../linkList')

// hash
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head
  const hash = new Map()

  let cur = head

  hash.set(head.val, true)

  while (cur !== null && cur.next !== null) {
    if (hash.has(cur.next.val)) {
      cur.next = cur.next.next
    } else {
      hash.set(cur.next.val, true)
      cur = cur.next
    }
  }

  return head
}

const exp = generateList([1, 1, 2, 3, 3])

console.log(deleteDuplicates(exp))

// 更具升序的特点 去当前的val 如果相同

function deleteDuplicates2(head) {
  let curVal = head.val

  let cur = head

  while (cur !== null && cur.next !== null) {
    if (cur.next.val === curVal) {
      cur.next = cur.next.next
    } else {
      curVal = cur.next.val
      cur = cur.next
    }
  }

  return head
}

deleteDuplicates2(generateList([1, 1, 2]))
