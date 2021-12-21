const Heap = require('../Heap')

// 定义比较方法
function compare(a, b) {
  return a[1] > b[1] || (a[1] === b[1] && a[0] < b[0])
}

function topKFrequent(words, k) {
  const heap = new Heap(compare)
  const map = {}
  const res = []

  words.forEach((w) => {
    if (map[w]) {
      map[w]++
    } else {
      map[w] = 1
    }
  })

  Object.entries(map).forEach((data) => {
    heap.push(data)
  })

  while (heap.size() && k--) {
    res.push(heap.top())
    heap.pop()
  }
  return res
}
