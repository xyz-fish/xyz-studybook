// * https://leetcode-cn.com/problems/k-closest-points-to-origin/

const Heap = require('../Heap')

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const heap = new Heap(compare)

  for (let i = 0; i < points.length; i++) {
    if (heap.size() < k || compare(heap.top(), points[i])) {
      heap.push(points[i])
      if (heap.size() > k) {
        heap.pop()
      }
    }
  }

  return heap.data
}
