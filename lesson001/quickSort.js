function quickSort(arr) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        ;[arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }

  return arr
}

module.exports = quickSort
