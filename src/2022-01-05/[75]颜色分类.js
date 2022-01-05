/**
 * * https://leetcode-cn.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const n = nums.length
  let pt0 = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      swap(nums, i, pt0)
      pt0++
    }
  }

  let pt1 = pt0

  for (let i = pt0; i < nums.length; i++) {
    if (nums[i] === 1) {
      swap(nums, i, pt1)
      pt1++
    }
  }

  return nums
}

function swap(arr, a, b) {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}
