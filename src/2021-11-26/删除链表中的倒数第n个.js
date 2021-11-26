const { generateList, ListNode } = require('../../linkList')

const exp = generateList([1, 2, 3, 4, 5])

/**
 * 先计算链表长度len 再根据 len - n 去删除
 * @param {*} head
 * @param {*} n
 * @returns
 */
function removeBnNode(head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let cur = head
  let len = 0

  while (cur !== null) {
    cur = cur.next
    len++
  }

  let i = 0
  cur = dummy

  while (cur.next !== null && i < len - n) {
    i++
    cur = cur.next
  }
  cur.next = cur.next.next
  return dummy.next
}

// console.log(JSON.stringify(removeBnNode(exp, 3)))

/**
 * 双指针 一个先行n + 1 一个后行 找到倒数第N - 1节点 然后改变N指向
 * @param {*} head
 * @param {*} n
 * @returns
 */
function removeNthFromEnd(head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let before = dummy
  let after = dummy

  while (n >= 0) {
    before = before.next
    n--
  }

  while (before !== null) {
    after = after.next
    before = before.next
  }

  after.next = after.next.next

  return dummy.next
}

removeNthFromEnd(exp, 5)
