const Heap = require('../Heap')

function findKthLargest(nums, k) {
  // 其实可以通过k 和nums.length 大小来确定采用大顶堆还是小顶堆 这样可以更少的pop
  const heap = new Heap()

  for (const n of nums) {
    heap.push(n)
  }

  // 大顶堆popk k - 1个 输出单前的top
  while (--k) {
    heap.pop()
  }

  return heap.top()
}
