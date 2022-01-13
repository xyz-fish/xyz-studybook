// https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums/

// * 暴力解法。。
var rangeSum = function (nums, n, left, right) {
  const temp = []

  for (let i = 0; i < n; i++) {
    temp.push(nums[i])
    let j = i + 1
    let sum = nums[i]
    while (j < n) {
      temp.push(sum + nums[j])
      sum += nums[j]
      j++
    }
  }

  const sn = temp.sort((a, b) => (a > b ? 1 : -1))

  let r = 0

  for (let i = left - 1; i < right; i++) {
    r += sn[i] % (Math.pow(10, 9) + 7)
  }

  return r % (Math.pow(10, 9) + 7)
}
