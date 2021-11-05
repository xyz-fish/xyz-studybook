function ListNode(val) {
  this.val = val
  this.next = null
}

function generateList(array) {
  let fakeHead = new ListNode(0)
  let current = fakeHead
  for (let index = 0; index < array.length; index++) {
    current.next = {
      val: array[index],
      next: null
    }
    current = current.next
  }
  return fakeHead.next
}

function generateArray(list) {
  let res = []
  while (list) {
    res.push(list.val)
    list = list.next
  }
  return res
}

module.exports = {
  generateArray,
  generateList,
  ListNode
}
