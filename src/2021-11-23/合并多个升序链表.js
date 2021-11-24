const { generateList, ListNode } = require('../../linkList')

const exp = [
  generateList([1, 2, 3]),
  generateList([1, 2, 4]),
  generateList([2, 3, 5])
]

mergeKList(exp)

/**
 *
 * @param {*} lists listlink[]
 */
function mergeKList(lists) {
  let head = new ListNode()
  let cur = head

  while (lists.length > 0 && lists.some((node) => node !== null)) {
    lists = lists.filter((list) => list !== null)
    let min = lists[0].val
    let minIdx = 0
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] !== null && lists[i].val < min) {
        min = lists[i].val
        minIdx = i
      }
    }
    cur.next = lists[minIdx]
    lists[minIdx] = lists[minIdx].next
    cur = cur.next
  }

  return head.next
}
