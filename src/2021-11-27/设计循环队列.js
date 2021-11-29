console.log(Array.from({ length: 3 }))

function MyCircularQueue(k) {
  this.queue = Array.from({ length: k })
  this.k = k
}

MyCircularQueue.prototype.enQueue = function (value) {
  for (var i = 0; i < k; i++) {
    if (this.queue[i] === undefined) {
      this.queue[i] = value
      return true
    }
  }

  return false
}

MyCircularQueue.prototype.Front = function () {
  const front = this.queue[0]
  if (front === undefined) return -1
  return front
}

MyCircularQueue.prototype.Rear = function (value) {
  const last = this.queue[this.k]
  return last === undefined ? -1 : last
}

MyCircularQueue.prototype.isFull = function () {
  return this.queue.every((v) => v !== undefined)
}

MyCircularQueue.prototype.deQueue = function () {
  for (let i = k - 1; i >= 0; i--) {
    if (this.queue[i] !== undefined) {
      this.queue[i] = undefined
      return true
    }
  }
  return false
}

MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.every((v) => v === undefined)
}
