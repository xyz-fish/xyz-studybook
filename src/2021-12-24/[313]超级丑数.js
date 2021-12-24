// * https://leetcode-cn.com/problems/super-ugly-number/
var nthSuperUglyNumber = function (n, primes) {
  const dp = Array.from({ length: n })
  dp[0] = 1

  const counts = Array.from({ length: primes.length }).fill(0)

  for (let i = 1; i < n; i++) {
    const nums = primes.map((v, index) => v * dp[counts[index]])

    const min = Math.min.apply(null, nums)

    for (let j = 0; j < counts.length; j++) {
      if (min === nums[j]) {
        counts[j]++
      }
    }
    dp[i] = min
  }

  return dp[n - 1]
}
