// 地址  https://leetcode-cn.com/problems/number-of-orders-in-the-backlog/
const Heap = require('../Heap')

// 两个堆 分别代表 采购订单和销售订单
/**
 *
 * @param {[prices: number, count: number, type: 0 | 1]} orders
 */
function getNumberOfBacklogOrders(orders) {
  // 销售订单是小顶堆
  const sellHeap = new Heap((a, b) => a[1] > b[1])
  // 采购订单 大顶堆
  const buyHeap = new Heap((a, b) => a[1] < b[1])

  for (let i = 0; i < orders.length; i++) {
    const item = orders[i]

    // 当新来的订单是采购订单的时候
    if (item[2] === 0) {
      // * 找到销售订单堆 对比看下对消
      // ? 如果符合条件会不断对消我们的订单
      while (sellHeap.size() && item[0] <= sellHeap.top()[0]) {
        // 进行对消
        const diff = sellHeap.top()[1] - item[1]
        // * 如果diff > 0 我们pop 销售订单的，如果小于diff <=0 我们新来的订单数量count需要 等于 Item[1] = sellHeap.top()[1]
        if (dif > 0) {
          sellHeap.pop()
        } else {
          item[1] = -diff
        }
      }

      // 这里对消后的订单加进来 这里可以没有产生对消
      if (item[1] > 0) {
        buyHeap.push(item)
      }
    } else {
      // 这里的逻辑和上面一样
      while (buyHeap.size() && item[0] <= buyHeap.top()[0]) {
        const diff = buyHeap.top()[1] - item[1]
        if (dif > 0) {
          buyHeap.pop()
        } else {
          item[1] = -diff
        }
      }

      if (item[1] > 0) {
        sellHeap.push(item)
      }
    }
  }

  // 这里 两个订单堆就是最终的积压订单
  // * 取积压订单数 return
  let res = 0

  for (let i = 0; i < buyHeap.data.length; i++) {
    res += buyHeap.data[i][1]
  }

  for (let i = 0; i < sellHeap.data.length; i++) {
    res += sellHeap.data[i][1]
  }
  return res
}
