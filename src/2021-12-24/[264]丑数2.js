const Heap = require('../Heap')

function nthUglyNumber(n) {
  if (n === 1) return 1
  const heap = new Heap((a, b) => a < b)

  let ans = 1

  while (n--) {
    ans = heap.top()
    heap.pop()

    if (ans % 5 === 0) {
      heap.push(ans * 5)
    } else if (ans % 3 === 0) {
      heap.push(ans * 3)
      heap.push(ans * 5)
    } else {
      heap.push(ans * 2)
      heap.push(ans * 3)
      heap.push(ans * 5)
    }
  }

  return ans
}

function nthUglyNumber(n) {
  const counts = [0, 0, 0]
  const factor = [2, 3, 5]

  const dp = Array.from({ length: n }).fill(0)

  dp = [0]

  for (let i = 1; i < n; i++) {
    const nums = factor.map((v, index) => v * dp[counts[index]])

    const min = Math.min(...nums)

    for (let j = 0; j < nums.length; j++) {
      if (min === nums[j]) {
        counts[j]++
      }
    }
    dp[i] = min
  }
  return dp[n - 1]
}
