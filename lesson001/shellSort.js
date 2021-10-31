function shellSort(arr) {
  const len = arr.length
  let gap = Math.floor(len / 2)
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i
      while (j - gap >= 0 && arr[j - gap] > arr[j]) {
        ;[arr[j], arr[j - gap]] = [arr[j - gap], arr[j]]
        j -= gap
      }
    }

    gap = Math.floor(gap / 2)
  }

  return arr
}

// input [1, 3, 6, 4, 8, 5, 2, -1]
// 第一步 gap = 4: 分成{4}个 [1, 8], [3, 5], [6, 2], [4, 1] => 对每一组分别进行插入排序 =>  [1, 3, 2, -1, 8, 5, 6, 4]
// 第二步 gap = 2: 分成{2}个 [1, 2, 8, 6], [3, -1, 5, 4] => [1,3,-1,2,5,8,4,6]
// 第三部 gap = 1 [1,3,-1,2,5,8,4,6] 插入排序

module.exports = shellSort
