// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 你应当 保留 两个分区中每个节点的初始相对位置。 [1, 4, 3, 2, 5, 2] 3 => [1, 2, 2, 4, 3, 5]
const { generateList, ListNode } = require('../../linkList')

function partition(head, x) {
  let cur = head
  let prev = new ListNode()
  let prevCur = prev
  let tail = new ListNode()
  let tailCur = tail

  while (cur) {
    if (cur.val < x) {
      prevCur.next = {
        val: cur.val
      }
      prevCur = prevCur.next
    } else {
      tailCur.next = {
        val: cur.val
      }

      tailCur = tailCur.next
    }

    cur = cur.next
  }

  prevCur.next = tail

  return prev
}

const exp = generateList([1, 4, 3, 2, 5, 2])

const r = partition(exp, 3)

console.log(JSON.stringify(r))
