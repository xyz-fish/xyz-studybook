// Hash
var hasCycle = function (head) {
  const hash = new Map()

  let cur = head

  while (cur) {
    if (hash.has(cur)) {
      break
    }
    hash.set(cur, cur)
    cur = cur.next
  }

  return !!cur
}

// 快慢指针

function hasCycle2(head) {
  let fast = head.next
  let last = head

  while (last !== fast && fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  return fast !== null && fast.next !== null
}
