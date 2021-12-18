class MinHeap {
  constructor() {
    this.data = []
  }

  size() {
    return this.data.length
  }

  top() {
    return this.data[0]
  }

  swap(i, j) {
    const tmp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = tmp
  }

  push(val) {
    this.data.push(val)

    let index = this.size() - 1

    while (index) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.data[index] > this.data[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  pop() {
    if (this.size() === 0) return
    if (this.size() === 1) {
      return this.data.pop()
    }
    const result = this.data.pop()
    this.data[0] = result
    let index = 0

    while (index * 2 + 1 < this.size()) {
      const leftIndex = index * 2 + 1
      const rightIndex = index * 2 + 2

      let findIndex = index

      if (this.data[findIndex] < this.data[leftIndex]) {
        findIndex = leftIndex
      }

      if (
        rightIndex < this.size() &&
        this.data[findIndex] < this.data[rightIndex]
      ) {
        findIndex = rightIndex
      }

      if (findIndex !== index) {
        this.swap(findIndex, index)
        index = findIndex
      } else {
        break
      }
    }

    return result
  }
}
const heap = new MinHeap()

heap.push(9)
heap.push(3)
heap.push(6)
heap.push(8)
heap.push(5)
heap.push(2)
heap.push(4)
heap.push(7)
heap.push(1)

heap.print()

for (let i = 0; i < 11; i++) {
  heap.pop()
}
