// * https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

// 两两比对 归并 两个增序的处理
// [2, 6, 7] [1 ,5, 8] 2 > 1 则 必有 2 - 0 + 1 个 大于 1的

function mergeSort(nums, l, r) {
  if (l >= r) return 0

  let ans = 0

  const mid = (l + r) >> 1
  const ansL = mergeSort(nums, l, mid)
  const ansR = mergeSort(nums, mid + 1, r)
  let p = l,
    q = mid + 1,
    k = 0
  let tmp = []
  while (p <= mid || q <= r) {
    if (q > r || (p <= mid && nums[p] <= nums[q])) {
      tmp[k++] = nums[p++]
    } else {
      // 这里 查找 逆序
      ans += mid - p + 1
      tmp[k++] = nums[q++]
    }
  }

  ans += ansL + ansR
  for (k = 0; k < r - l + 1; k++) {
    nums[l + k] = tmp[k]
  }
  tmp = null
  return ans
}

var reversePairs = function (nums) {
  return mergeSort(nums, 0, nums.length - 1)
}
