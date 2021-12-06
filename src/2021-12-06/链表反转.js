function reverseList(head) {
  if (head === null || head.next === null) return head
  const tail = head.next
  const p = reverseList(tail)
  p.next = tail.next
  console.log(tail, head, p)
  return tail
}

// 1 -> 2
//  tail.next = head.next
//  head.next = head.next.next
// tail.next = head

const l = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: null }
  }
}

// reverseList(l)

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: null }
  }
}

const tail = head.next
const p = tail.next
head.next = null
tail.next = head
p.next = tail

console.log(head, tail, p)
