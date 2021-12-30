// * https://leetcode-cn.com/problems/longest-consecutive-sequence/

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  nums.sort((a, b) => a - b)
  let max = 1
  let pre = max
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    if (nums[i] === nums[i - 1] + 1) {
      max++
    } else {
      pre = Math.max(max, pre)
      max = 1
    }
  }

  return Math.max(pre, max)
}
