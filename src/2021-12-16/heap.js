/**
 * [0, 1, 2, 3, 4, 5] => i => {  2 * i + 1, 2 * i + 2 }
 */
class Heap {
  constructor() {
    this.data = []
    this.length = 0
  }

  shiftUp(ind) {
    let pInd = Math.floor((ind - 1) / 2)
    while (ind && this.data[ind] > this.data[pInd]) {
      this.swap(ind, pInd)
      ind = pInd
      pInd = Math.floor((ind - 1) / 2)
    }
  }

  shiftDown(ind) {
    // 边界是关键点
    while (ind * 2 + 1 < this.length - 1) {
      console.log(ind, this.data)
      // 这里判断是否存在右节点的处理 还是要用 ind * 2 + 2 > this.length - 1
      if (
        ind * 2 + 2 > this.length - 1 ||
        this.data[ind * 2 + 1] > this.data[ind * 2 + 2]
      ) {
        this.swap(ind, ind * 2 + 1)
        ind = ind * 2 + 1
      } else {
        this.swap(ind, ind * 2 + 2)
        ind = ind * 2 + 2
      }
    }
  }

  push(val) {
    this.data[this.length++] = val
    if (this.length === 1) return
    this.shiftUp(this.length - 1)
  }

  pop() {
    if (this.length === 0) return
    const last = this.data.pop()
    this.length--

    this.data[0] = last

    this.shiftDown(0)

    console.log(this.data)
    return last
  }

  top() {
    return this.data[0]
  }

  swap(i, j) {
    const tmp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = tmp
  }
}

const heap = new Heap()

heap.push(6)
heap.push(3)
heap.push(1)
heap.push(4)
heap.push(5)
heap.push(2)
heap.push(11)
heap.push(18)
heap.push(9)
heap.push(7)

console.log(heap.data)

heap.pop()
