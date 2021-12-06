// 双向链表
class MyLinkedList {
  constructor() {
    this.head = {
      next: null,
      prev: null,
      val: null
    }
  }

  get(index) {
    if (index < 0) return -1
    let i = 0
    let cur = this.head
    while (i < index && cur) {
      cur = cur.next
      i++
    }
    return cur ? (cur.val === null ? -1 : cur.val) : -1
  }

  addAtHead(val) {
    const tmp = {
      val,
      next: this.head,
      prev: null
    }

    this.head.prev = tmp

    this.head = tmp
  }

  addAtTail(val) {
    let cur = this.head
    while (cur.next) {
      cur = cur.next
    }
    cur.val = val
    cur.next = {
      next: null,
      val: null,
      prev: cur
    }
  }

  addAtIndex(index, val) {
    if (index <= 0) {
      this.addAtHead(val)
      return
    }
    let i = 0
    let cur = this.head
    while (cur.next && i < index - 1) {
      cur = cur.next
      i++
    }

    cur.next = {
      val,
      next: cur.next,
      prev: cur
    }
  }

  deleteAtIndex(index) {
    if (index < 0) return
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = null
      return
    }
    let cur = this.head
    let i = 0
    while (i < index - 1 && cur.next) {
      cur = cur.next
      i++
    }

    if (cur.next.next) {
      cur.next = cur.next.next
      cur.next.prev = cur
    }
  }
}

const linkedList = new MyLinkedList()

linkedList.addAtIndex(1, 0)

console.log(linkedList.head)
