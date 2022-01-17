function maxSubArray(nums) {
  let max = (pre = nums[0])
  let pre_arr = [pre]

  for (let i = 1; i < nums.length; i++) {
    console.log(pre)
    if (nums[i] > nums[i] + pre) {
      pre_arr = [nums[i]]
    } else {
      pre_arr.push(nums[i])
    }

    console.log(pre_arr)

    pre = Math.max(nums[i], pre + nums[i])

    max = Math.max(pre, max)
  }
  console.log(max)
  return max
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -1, 4])
