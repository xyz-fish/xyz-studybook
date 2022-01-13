// 归并排序

function sortArray(nums) {
  return mergeSort(nums, 0, nums.length - 1)
}

function mergeSort(nums, l, r) {
  // 拆分到一个的时候, 开始合并
  if (l >= r) return nums
  const mid = (l + r) >> 1
  // 1. 拆分到 left/right只有一个元素的时候
  // 2. 在开始合并(按照从小到大合并两个数) => 造次合并之前合后的两个(两个升序的合并)
  const left = mergeSort(nums, l, mid)
  const right = mergeSort(nums, mid + 1, r)

  // * 合并连个升序的数组的方法

  // * 双指针 指向两个升序数组 逐个比较添加 指针变动
  let tmp = []
  let j = 0,
    p = l,
    q = mid + 1

  console.log(nums[p], nums[q])

  while (p <= mid || q <= r) {
    if (q > r || (p <= mid && nums[p] < nums[q])) {
      tmp[j++] = nums[p++]
    } else {
      tmp[j++] = nums[q++]
    }
  }

  for (let k = 0; k < tmp.length; k++) {
    nums[l + k] = tmp[k]
  }

  tmp = null

  return nums
}

console.log(sortArray([3, 5, 9, 2, 6, 8, 7, 4, 1, 0]))

function s2(arr) {
  const n = arr.length
  let partN = 1
  let tmp = []

  while (partN < n) {
    for (let i = 0; i < n; i += partN * 2) {
      let l = i
      let r = i + partN * 2 - 1
      let mid = (l + r) >> 1
      tmp = []
      let p = l,
        q = mid + 1,
        j = 0

      r = Math.min(r, n - 1)
      mid = Math.min(r, mid)

      while (p <= mid || q <= r) {
        if (q > r || (p <= mid && arr[p] < arr[q])) {
          tmp[j++] = arr[p++]
        } else {
          tmp[j++] = arr[q++]
        }
      }

      for (let k = 0; k < tmp.length; k++) {
        arr[l + k] = tmp[k]
      }

      console.log(arr, tmp)
    }

    partN *= 2
  }

  tmp = null
  return arr
}
