const { generateList, ListNode } = require('../../linkList')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) return null
  let last = head
  let fast = head.next

  while (last !== null && fast !== null && fast !== last) {
    last = last.next
    fast = fast.next.next
  }

  let cur = last
}
