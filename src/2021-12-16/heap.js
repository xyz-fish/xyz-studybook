/**
 * [0, 1, 2, 3, 4, 5] => i => {  2 * i + 1, 2 * i + 2 }
 */
class MaxHeap {
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
    while (ind * 2 + 1 < this.length) {
      // 这里判断是否存在右节点的处理 还是要用 ind * 2 + 2 > this.length

			let findIndex = ind
			const leftIndex = ind * 2 + 1
			const rightIndex = ind * 2 + 2

			if (this.data[findIndex] < this.data[leftIndex]) {
			 findIndex = leftIndex
			}
			
			if (this.data[findIndex] < this.data[rightIndex]) {
				findIndex = rightIndex
			}

			if (findIndex! == ind) {
				this.swap(findIndex, ind)
				ind = findIndex
			} else {
				break
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
    return
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

const heap = new MaxHeap()

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
heap.pop()
heap.pop()
heap.pop()
