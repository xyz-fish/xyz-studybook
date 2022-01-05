// * https://leetcode-cn.com/problems/smallest-k-lcci/

// 大顶堆处理
class Heap {
  constructor() {
    this.data = []
  }

  size() {
    return this.data.length
  }

  swap(i, j) {
    const tmp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = tmp
  }

  push(x) {
    this.data.push(x)
    let index = this.size() - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.data[parentIndex] < this.data[index]) {
        this.swap(parentIndex, index)
        index = parentIndex
      } else {
        break
      }
    }
  }

  top() {
    return this.data[0]
  }

  pop() {
    const last = this.data.pop()
    this.data[0] = last
    if (this.size() <= 1) return last

    let index = 0

    while (index * 2 + 1 < this.size()) {
      const leftIndex = index * 2 + 1
      const rightIndex = index * 2 + 2

      let maxIndex = index

      if (this.data[maxIndex] < this.data[leftIndex]) {
        maxIndex = leftIndex
      }

      if (
        rightIndex < this.size() &&
        this.data[maxIndex] < this.data[rightIndex]
      ) {
        maxIndex = rightIndex
      }

      if (maxIndex > index) {
        this.swap(maxIndex, index)
        index = maxIndex
      } else {
        break
      }
    }
    return last
  }
}

var smallestK = function (arr, k) {
  const h = new Heap()

  for (let i = 0; i < arr.length; i++) {
    if (h.size() < k || h.top() > arr[i]) {
      h.push(arr[i])

      if (h.size() > k) {
        h.pop()
      }
    }
  }

  return h.data
}
