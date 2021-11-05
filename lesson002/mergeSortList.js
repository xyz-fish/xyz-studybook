const { generateList, generateArray } = require('../linkList')

// 递归
function mergeSortList(l1, l2) {
  // 两个边界处理
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    // l1的值小 再去比较 l1.next 和l2
    l1.next = mergeSortList(l1.next, l2)
    return l1
  }
  // l2的值小 再去比较 l1和l2.next
  l2.next = mergeSortList(l1, l2.next)
  return l2
}

const data1 = [1, 2, 5]
const data2 = [1, 3, 4]

const l1 = generateList(data1)
const l2 = generateList(data2)

const res = generateArray(mergeSortList(l1, l2))

console.log(res)
