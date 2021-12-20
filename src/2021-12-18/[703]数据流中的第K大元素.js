const Heap = require('../Heap')
class KthLargest {
  constructor(nums, k) {
    this.minHeap = new Heap((a, b) => b - a)
    this.k = k
    for (const n of nums) {
      this.add(n)
    }
  }

  add(val) {
    this.minHeap.push(val)

    // 保证堆有K个元素 top 便是当前最小的（第K大元素）
    if (this.minHeap.size() > this.k) {
      this.minHeap.pop()
    }

    return this.minHeap.pop()
  }
}
