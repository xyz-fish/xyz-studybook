function insertSort(arr) {
  const len = arr.length

  let cur = 0
  for (let i = 0; i < len; i++) {
    cur = i
    // 这里 cur - 1 >=0 的也可以不写  arr[-1] = undefined js 中 小于任何数字 即使是无限小
    while (cur - 1 >= 0 && arr[cur] < arr[cur - 1]) {
      ;[arr[cur], arr[cur - 1]] = [arr[cur - 1], arr[cur]]
      cur--
    }
  }

  return arr
}

module.exports = insertSort
