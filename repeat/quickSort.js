function quickSort(arr, left, right) {
  var len = arr.length
  var partitionIndex
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1

  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }

  console.log(arr)

  return arr
}

function partition(arr, left, right) {
  var base = left
  var ind = left + 1
  for (var i = ind; i <= right; i++) {
    if (arr[i] < arr[base]) {
      exchange(arr, i, ind)
      ind++
    }
  }
  exchange(arr, base, ind - 1)
  return ind - 1
}
function exchange(arr, left, right) {
  var tmp = arr[left]
  arr[left] = arr[right]
  arr[right] = tmp
}

function quickSort2(arr) {
  var len = arr.length
  left = 0
  right = len - 1

  if (left >= right) return arr

  var partitionIndex = left
  var leftArr = []
  var rightArr = []

  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < arr[left]) {
      partitionIndex++
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  return [...quickSort2(leftArr), arr[left], ...quickSort2(rightArr)]
}

// quickSort([2, 3, 1, 5, 4])

console.log(quickSort2([2, 3, 1, 5, 4]))

console.log(quickSort2([5, 4, 3, 2, 1, -1]))
