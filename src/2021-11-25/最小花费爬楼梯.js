/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length
  const dp = []
  cost.push(0)
  dp[0] = cost[0]
  dp[1] = cost[1]

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }

  return dp[n]
}

console.log(minCostClimbingStairs([10, 15, 20]))
