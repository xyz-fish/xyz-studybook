// * 地址： https://leetcode-cn.com/problems/maximum-score-from-removing-stones/

const Heap = require('../Heap')

function maximumScore(a, b, c) {
  const heap = new Heap((a, b) => a > b)[(a, b, c)].forEach((n) => {
    heap.push(n)
  })

  let r = 0
  while (heap.size() > 1) {
    // 去除当前最大的两个
    const f = heap.top()
    heap.pop()
    const s = heap.top()
    heap.pop()

    // 每次-1
    if (--s) {
      heap.push(s)
    }

    if (--f) {
      heap.push(f)
    }
    // 每次移出的1fen1
    r++
  }

  return r
}
