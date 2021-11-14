const { generateList } = require('../../linkList')

// 修改节点内容

/**
 * 修改l的第n个节点值为val
 * @param {*} l
 * @param {*} n
 * @param {*} val
 */
function listPatch(l, n, val) {
  let i = 0
  let cur = l

  while (cur !== null) {
    if (i === n) {
      cur.val = val
      break
    }
    i++
    cur = cur.next
  }

  return l
}

const l1 = generateList([1, 2, 3, 4, 5])
const r1 = listPatch(l1, 6, 'patch')

console.log(JSON.stringify(r1))
