// 还是有些明湖 等下在看看 先搞下冒泡 快排
function shellSort(arr) {
  const len = arr.length
  let gap = Math.floor(len / 2)
  while (gap > 0) {
    for (let i = 0; i < gap; i++) {
      if (arr[i] > arr[gap + i]) {
        ;[arr[gap + i], arr[i]] = [arr[i], arr[gap + i]]
      }
    }

    gap = Math.floor(gap / 2)
  }

  console.log(arr)

  return arr
}

shellSort([1, 3, 6, 4, 8, 5])

module.exports = shellSort
