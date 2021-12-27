// * https://leetcode-cn.com/problems/top-k-frequent-elements/

const Heap = require('../Heap')

var topKFrequent = function (nums, k) {
  const map = new Map()
  const heap = new Heap()

  for (const i of nums) {
    const item = map.get(i)
    if (!item) {
      map.set(i, 1)
    } else {
      map.set(i, item + 1)
    }
  }

  for (let item of map) {
    if (heap.size() < k || item[1] > heap.top()[1]) {
      heap.push(item)
      if (heap.size() > k) {
        heap.pop()
      }
    }
  }

  return heap.data.map((v) => v[0])
}
