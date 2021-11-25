// f(n) = f(n - 1) + f(n -2)
// 递归 - 超时 重复计算（用一个数组memo 记录处理）

// 递推
var climbStairs = function (n) {
  const dp = []
  dp[0] = 1
  dp[1] = 2

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n - 1]
}

// 滚动数组

var climbStairs2 = function (n) {
  let p = 0
  let q = 0
  let r = 1

  for (let i = 1; i <= n; i++) {
    p = q
    q = r
    r = q + p
  }

  return r
}

console.log(climbStairs2(7), climbStairs(7))
