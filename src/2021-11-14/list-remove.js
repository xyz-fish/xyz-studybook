const { generateList, ListNode } = require('../../linkList')
// 删除链表

/**
 * 删除链表l的第n个链表
 * @param {*} l
 * @param {*} n 这里n只能是 0 <= n < 链表的长度 - 1
 * @returns ListLink
 */
function removeList(l, n) {
  let head = new ListNode()
  head.next = l
  let cur = head
  let i = 0
  while (cur !== null) {
    if (i === n) {
      cur.next = cur.next.next
      break
    } else {
      cur = cur.next
    }
    i++
  }

  return head.next
}

function removeList2(l, n) {
  if (n === 0) return l1.next

  let cur = l
  let i = 0
  while (cur && cur.next) {
    i++
    if (i === n) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return l
}

const l1 = generateList([1, 2, 3, 4, 5])
const r1 = removeList2(l1, 4)

console.log(JSON.stringify(r1))
