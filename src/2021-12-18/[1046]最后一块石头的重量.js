// 需要构建一个大顶堆

class MaxHeap {
  constructor() {
    this.data = []
  }

  size() {
    return this.data.length
  }

  top() {
    return this.data[0]
  }

  push(val) {
    this.data.push(val)

    let index = this.data.size() - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.data[index] > this.data[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }

    return this.top()
  }

  pop() {
    if (this.size() === 0) return
    const lastOne = this.data.pop()
    let r
    if (this.size() > 0) {
      r = this.data[0]
      this.data[0] = lastOne

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
          this.data[findIndex] > this.data[rightIndex]
        ) {
          findIndex = rightIndex
        }

        if (findIndex > index) {
          this.swap(findIndex, index)
          index = findIndex
        } else {
          break
        }
      }
    }
    return r || lastOne
  }

  swap(i, j) {
    const tmp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = tmp
  }
}

//
function lastStoneWeight(stones) {
  const stonesHeap = new MaxHeap()

  for (const i of stones) {
    stonesHeap.push(i)
  }

  // 剩余1块
  while (stonesHeap.size() > 1) {
    const f = stonesHeap.pop()
    const s = stonesHeap.pop()
    if (f - s > 0) {
      stones.push(f - s)
    }
  }

  // 返回是有可能 碰的没有了
  return stonesHeap.top() || 0
}
