const { generateList } = require('../../linkList')

function listFindIndex(l, val) {
  let cur = l
  let i = 0
  while (cur) {
    if (cur.val === val) {
      break
    }
    cur = cur.next
    i++
  }

  return cur !== null ? i : -1
}

const l1 = generateList([1, 2, 3, 4, 5])
const r1 = listFindIndex(l1, 9)

console.log(r1)

function listFindVal(l, index) {
  let cur = l
  let i = 0
  let res = null
  while (cur) {
    if (index === i) {
      res = cur.val
      break
    }
    i++
    cur = cur.next
  }
  return res
}

const l2 = generateList(['q', 'w', 'e', 'r'])
const r2 = listFindVal(l2, 5)
console.log(r2)
