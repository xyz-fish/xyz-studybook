function compare(a, b) {
  return a - b
}

class Heap {
  constructor(compare) {
    this.compare = compare
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

    let index = this.size() - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const condition = this.compare(this.data[index], this.data[parentIndex])
      if (condition) {
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

        const conditionL = this.compare(
          this.data[leftIndex],
          this.data[findIndex]
        )
        if (conditionL) {
          findIndex = leftIndex
        }

        const conditionR = this.compare(
          this.data[rightIndex],
          this.data[findIndex]
        )

        if (conditionR) {
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
    return r === undefined ? lastOne : r
  }

  swap(i, j) {
    const tmp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = tmp
  }
}

module.exports = Heap
