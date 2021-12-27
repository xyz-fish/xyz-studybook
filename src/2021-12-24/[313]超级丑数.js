// * https://leetcode-cn.com/problems/super-ugly-number/

const Heap = require('../Heap')

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

// ? error
function nthUglyNumber2(n, primes) {
  if (n === 1) return 1
  const heap = new Heap((a, b) => a < b)
  let ans = 1
  heap.push(1)
  while (n--) {
    ans = heap.top()
    heap.pop()

    for (let j = primes.length - 1; j > 0; j--) {
      if (ans & primes[j]) {
        for (let i = j; i < primes.length; i++) {
          heap.push(ans * primes[i])
        }
      }
    }
  }

  return ans
}
