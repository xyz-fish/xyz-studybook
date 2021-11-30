/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.head = 0
  this.tail = 0
  this.count = 0
  this.queue = Array.from({ length: k })
  this.length = k
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.count === this.length) return false
  this.count++

  if (this.tail === this.length) {
    this.tail = 1
  } else {
    this.tail++
  }

  this.queue[this.tail - 1] = value

  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.count === 0) return false
  this.count--
  this.queue[this.head] = undefined
  if (this.head === this.length - 1) {
    this.head = 0
  } else {
    this.head++
  }

  return true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.count === 0) return -1
  return this.queue[this.head]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.count === 0) return -1
  return this.queue[this.tail - 1]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count === this.length
}
