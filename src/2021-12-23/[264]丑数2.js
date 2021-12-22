const heap = require('../Heap')

var nthUglyNumber = function (n) {
  const factor = [2, 3, 5]
  const heap = new Heap((a, b) => a < b)
  heap.push(1)
  const set = new Set()

  while (--n) {
    const root = heap.top()
    for (const i of factor) {
      if (!set.has(i * root)) {
        set.add(root * i)
        heap.push(i * root)
      }
    }
    heap.pop()
  }
  return heap.top()
}
