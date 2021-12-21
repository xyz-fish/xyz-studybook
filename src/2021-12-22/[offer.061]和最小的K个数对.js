const Heap = require('../Heap')

function compare(a, b) {
  return a[0] + a[1] > b[0] + b[1]
}

function kSmallestPairs(nums1, nums2, k) {
  const heap = new Heap(compare)

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (
        heap.size() < k ||
        heap.top()[0] + heap.top[1] > nums1[i] + nums2[j]
      ) {
        heap.push(nums1[i] + nums2[j])
        if (heap.size() < k) heap.pop()
      }
    }
  }

  return heap.data
}
