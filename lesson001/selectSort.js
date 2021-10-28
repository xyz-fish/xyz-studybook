function selectSort(arr) {
  const len = arr.length

  let minIndex = 0

  for (let i = 0; i < len - 1; i++) {
    // i 当前已排序的最大的值的下标
    minIndex = i
    // 对于未排序的部分 遍历查找  和arr[minIndex]的值对比
    // 一开始不全理解 找到了就进行
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    // 进行值的交换
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  console.log(arr)

  return arr
}

module.exports = selectSort
