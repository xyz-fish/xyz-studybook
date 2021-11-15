function maxProfit(prices) {
  var len = prices.length
  // 记录股票最低点- 数组最小值
  var min = prices[0]
  // 记录最大获利
  var max = 0

  for (var i = 1; i < len; i++) {
    // 如果值小于单前确定的最小值，则替换
    if (prices[i] < min) {
      min = prices[i]
    } else {
      max = Math.max(prices[i] - min)
    }
  }

  return max
}

var a1 = [5, 1, 4, 2, 4]
var a2 = [7, 1, 5, 3, 6, 4]
var a3 = [7, 6, 4, 3, 1]
var a4 = [2, 1, 2, 0, 1, 2]
console.log(maxProfit(a1), maxProfit(a2), maxProfit(a3), maxProfit(a4))
