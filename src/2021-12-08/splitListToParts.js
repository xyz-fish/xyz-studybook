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

// const exp = generateList([0, 1])

// const r = splitListToParts(exp, 1)

/**
 *
 * @param {ListNode} cur 需要拆分的链表
 * @param {number} num 按多少个拆分
 */

function splitListToParts2(head, k) {
  let len = 0
  let cur = head
  while (cur) {
    cur = cur.next
    len++
  }

  const num = ~~(len / k)
  let rem = len % k
  const ret = []

  cur = head

  function getSingle(n) {
    let tmp = cur
    let p = cur
    cur = cur.next
    for (let j = 1; j < n; j++) {
      if (!cur) break
      p = p.next
      cur = cur.next
    }
    p.next = null
    return tmp
  }

  if (k > len) {
    for (let i = 0; i < k; i++) {
      if (cur) {
        ret.push(new ListNode(cur.val))
        cur = cur.next
      } else {
        ret.push(null)
      }
    }
    return ret
  }

  cur = head
  for (let i = 0; i < rem; i++) {
    const tmp = getSingle(num + 1)
    ret.push(tmp)
  }
  for (let i = 0; i < k - rem; i++) {
    if (cur) {
      let tmp = getSingle(num)
      ret.push(tmp)
    } else {
      ret.push(null)
    }
  }
  console.log(JSON.stringify(ret))
  return ret
}

const exp2 = generateList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// splitListToParts2(exp2, 3)

function splitListToParts3(head, k) {
  let len = 0
  let cur = head

  while (cur) {
    len++
    cur = cur.next
  }
  cur = head
  let num = Math.floor(len / k)
  let rem = len / k

  const ret = Array.from({ length: k }).fill(null)

  for (let i = 0; i < k && cur; i++) {
    // 这里来确定下每一项的数量的处理
    const n = i < rem ? num + 1 : num
    ret[i] = cur
    for (let j = 0; j < n; j++) {
      cur = cur.next
    }
    const next = cur.next
    cur.next = null
    cur = next
  }

  return ret
}

console.log(JSON.stringify(splitListToParts3(exp2, 3)))
