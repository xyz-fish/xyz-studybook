// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]

const Heap = require('../Heap')

// 小顶堆
function getLeastNumbers(arr, k) {
  const heap = new Heap('max')
  const len = arr.length
  for (let i = 0; i < len; i++) {
    heap.push(arr[i])
  }

  while (k++ < len) {
    heap.pop()
  }

  return heap.data
}

function getLeastNumbersM(arr, k) {
  const heap = new Heap('min')

  const res = []

  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i])
  }

  while (k--) {
    res.push(heap.pop())
  }

  return res
}

// 可以通过 K 和 arr.length 长度来优化pop的次数
