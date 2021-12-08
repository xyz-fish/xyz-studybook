const { generateList, ListNode } = require('../../linkList')

var splitListToParts = function (head, k) {
  console.log(k)
  if (k === 1) return [head]
  let len = 0
  let cur = head
  while (cur) {
    cur = cur.next
    len++
  }

  cur = head
  const num = ~~(len / k)
  const rem = len % k
  console.log(num, rem)
  const ret = []
  let remCount = rem
  while (remCount--) {
    let n = 0
    let tmp = cur
    let p = cur.next
    while (n++ < num) {
      p = p.next
      cur = cur.next
    }
    cur.next = null
    ret.push(tmp)
    cur = p
  }
  if (num === 0) {
    for (let i = 0; i < k - rem; i++) {
      ret.push(null)
    }
  } else if (len === k) {
    for (let i = 0; i < k; i++) {
      ret.push(new ListNode(cur.val))
      cur = cur.next
    }
  } else {
    for (let i = 0; i < len - num; i++) {
      let n = 0
      console.log(cur, 111)
      let tmp = cur
      if (tmp) {
        let p = cur.next
        console.log(cur, p)
        while (++n < num && cur) {
          if (p) {
            p = p.next
          }
          cur = cur.next
        }
        if (cur) {
          cur.next = null
        }
        console.log(tmp)
        ret.push(tmp)
        console.log(p)
        cur = p
      }
    }
  }
  console.log(JSON.stringify(ret))
  return ret
}

const exp = generateList([0, 1])

const r = splitListToParts(exp, 1)
