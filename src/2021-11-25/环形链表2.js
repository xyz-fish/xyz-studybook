const { generateList, ListNode } = require('../../linkList')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) return null
  let slow = head
  let fast = head.next

  while (fast !== slow && fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  if (fast === null || fast.next === null) return null

  fast = head
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}
