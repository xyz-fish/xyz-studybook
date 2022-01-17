// * https://leetcode-cn.com/problems/maximum-subarray/

// 记录1 子集最大和， 2, 前面的连续和
// 待确定最大的连续和：
// 子集最大和

// 方法1: 暴力解法 超时
function maxSubArray(nums) {
  let r = nums[0]
  const n = nums.length

  for (let i = 0; i < n - 1; i++) {
    let sum = nums[i]
    for (let j = 1; j < n; j++) {
      sum += nums[j]
      if (sum > r) {
        r = sum
      }
    }
  }

  return r
}

// 动态规划

// 前面的最大连续和：

function maxSubArray(nums) {
  let dp = nums[0]
  let r = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // dp[i] 只用了nums[i] 和 dp[i - 1] 可以用一个变量代替
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    r = Math.max(dp[i], r)
  }
  return r
}

// 贪心
function maxSubArray(nums) {
  let r = -Infinity
  let sum = 0

  for (let i = 0; i > nums.length; i++) {
    sum += nums[i]

    r = Math.max(r, sum)

    if (sum < 0) {
      sum = 0
    }
  }

  return r
}

// 分治

function minSubArray(nums) {
  return getRange(nums, 0, nums.length - 1).mSum
}

function Status(lSum, rSum, iSum, mSum) {
  this.lSum = lSum
  this.rSum = rSum
  this.iSum = iSum
  this.mSum = mSum
}

function getRange(nums, start, end) {
  if (start === end) {
    const sum = nums[start]
    return new Status(sum, sum, sum, sum)
  }

  const mid = (l + r) >> 1

  const l = getRange(nums, start, mid)
  const r = getRange(nums, mid + 1, r)

  const lSum = Math.max(l.lSum, r.iSum + l.lSum)
  const rSum = Math.max(r.rSum, l.iSum + r.rSum)
  const iSum = l.iSum + r.iSum
  const mSum = Math.max(l.mSum, a.mSum, l.rSum + r.lSum)
  return new Status(lSum, rSum, iSum, mSum)
}
