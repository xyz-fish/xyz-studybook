const { ListNode, generateList, generateArray } = require('../../linkList')
/**
 * 给链表尾部增加 一个 val 类似于 数组的push
 * @param {*} l 需要增加的list
 * @param {*} val
 */
function append(l, val) {
  const newNode = new ListNode(val)
  if (l === null) return newNode
  let cur = l
  while (cur.next) {
    cur = cur.next
  }

  cur.next = newNode
  return l
}

// 测试一下
const l1 = generateList([1, 2, 3, 4])

const r1 = append(l1, 5)
console.log(generateArray(r1)) // isOk

/**
 * 在链表L的n节点插入值是val n的大小 > 0 小于 L的长度
 * @param {*} l
 * @param {*} val
 * @param {*} n
 * @return ListLink
 */
function appendN(l, val, n) {
  const newNode = new ListNode(val)
  if (n === 0) {
    newNode.next = l
    return newNode
  }
  let cur = l
  let i = 0
  while (cur.next && ++i < n) {
    cur = cur.next
  }

  if (cur && cur.next) newNode.next = cur.next
  cur.next = newNode
  return l
}

const l2 = generateList([1, 2, 3, 4, 5])

const r2 = appendN(l2, 9, 7)
console.log(JSON.stringify(r2)) // OK
