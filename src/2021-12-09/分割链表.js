var partition = function (head, x) {
  const s = new ListNode()
  const b = new ListNode()

  let p = s
  let q = b

  let cur = head

  while (cur) {
    if (cur.val < x) {
      p.next = new ListNode(cur.val)
      p = p.next
    } else {
      q.next = new ListNode(cur.val)
      q = q.next
    }
    cur = cur.next
  }
  p.next = b.next
  return s.next
}
