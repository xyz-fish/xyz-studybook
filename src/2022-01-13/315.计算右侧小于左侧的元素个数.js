var countSmaller = function (nums) {
  const n = nums.length
  let countIndex = Array.from({ length: n }).map((_, i) => i)
  const ans = Array.from({ length: n }).fill(0)
  function mergeSort(nums, l, r) {
    if (l >= r) return

    const mid = (l + r) >> 1

    mergeSort(nums, l, mid)
    mergeSort(nums, mid + 1, r)

    let p = l,
      q = mid + 1,
      temp = [],
      k = 0,
      tempIndex = [],
      j = 0

    while (p <= mid || q <= r) {
      if (q > r || (p <= mid && nums[p] > nums[q])) {
        ans[countIndex[p]] += r - q + 1
        tempIndex[j++] = countIndex[p]
        temp[k++] = nums[p]
        p++
      } else {
        tempIndex[j++] = countIndex[q]
        temp[k++] = nums[q]
        q++
      }
    }
    for (let i = 0; i < r - l + 1; i++) {
      nums[i + l] = temp[i]
      countIndex[i + l] = tempIndex[i]
    }
    temp = null
    return nums
  }
  mergeSort(nums, 0, n - 1)
  return ans
}
