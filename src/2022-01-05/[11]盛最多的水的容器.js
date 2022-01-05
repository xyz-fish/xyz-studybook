// * https://leetcode-cn.com/problems/container-with-most-water/

var maxArea = function (height) {
  const len = height.length
  let left = 0
  let right = len - 1
  let max = 0
  while (left < right) {
    const s = Math.min(height[left], height[right])
    const w = (right - left) * s
    if (max < w) {
      max = w
    }

    if (s === height[left]) {
      left++
    } else {
      right--
    }
  }

  return max
}
