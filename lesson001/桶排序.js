const insertSort = require('./insertSort')

/**
 * 在计数排序的基础上 分bucketSize个“桶”（[min, max1], [max1, max2], ..., [maxn, max]）
 * 把数按照大小分别放入每个桶里 再对每个桶分别排序, 后每个桶的按照顺序塞入数组
 * @param {*} nums
 * @param {*} bucketSize
 */
function bucketsSort(nums, bucketSize) {
  const len = nums.length
  let min = Math.min.apply(null, nums)
  let max = Math.max.apply(null, nums)

  // step1 创建桶
  bucketSize = bucketSize || 4
  const buckets = Array.from({ length: bucketSize })
  // step2 确定每个桶的区间
  const step = Math.floor((max - min + 1) / bucketSize)

  // 把数组项分配按照大小区间分配指定的桶
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    // 确定nums[i] 应该放到哪个桶里
    const bucketIndex = Math.floor((v - min) / step)
    if (buckets[bucketIndex] === undefined) {
      buckets[bucketIndex] = []
    }
    buckets[bucketIndex].push(v)
  }

  // 把 nums 先制空 对每个桶进行排序 然后一次加入nums
  nums.length = 0
  for (let j = 0; j < buckets.length; j++) {
    insertSort(buckets[j])
    for (let k = 0; k < buckets[j].length; k++) {
      nums.push(buckets[j][k])
    }
  }
  return arr
}

var arr = [3, 2, 4, 5, 7, 5, 9, 4, 2, 6, 9]

console.log(bucketsSort(arr))
