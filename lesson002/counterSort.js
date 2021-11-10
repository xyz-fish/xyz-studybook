function counterSort(arr) {
  // 找出最大值和最小值
  const max = Math.max.apply(null, arr)
  const min = Math.min.apply(null, arr)

  // 创建一个计数的数组
  const counter = Array.from({ length: max - min + 1 }).fill(0)

  for (let i = 0; i < arr.length; i++) {
    const count = arr[i]
    if (counter[count] === undefined) counter[count] = 0
    counter[count]++
  }

  let index = 0

  for (let i = min; i < counter.length; i++) {
    while (counter[i] > 0) {
      arr[index++] = i
      counter[i]--
    }
  }
  console.log(arr)
  return arr
}

// 从min 开始
function counterSort2(arr) {
  var max = Math.max.apply(null, arr)
  var min = Math.min.apply(null, arr)

  var counter = Array.from({ length: max - min + 1 })

  for (let i = 0; i < arr.length; i++) {
    var counterIndex = arr[i]
    if (!counter[counterIndex]) counter[counterIndex] = 0
    counter[counterIndex]++
  }

  let index = 0

  for (let j = min; j <= max; j++) {
    while (counter[j] > 0) {
      arr[index++] = j
      counter[j]--
    }
  }

  console.log(arr)
  return arr
}

function counterSort3(arr) {
  const max = Math.max.apply(null, arr)
  const min = Math.min.apply(null, arr)

  const counter = new Map()
  for (let i = 0; i < arr.length; i++) {
    var counterIndex = arr[i]
    counter.set(counterIndex, counter.get(counterIndex) || 0 + 1)
  }

  let index = 0
  for (j of counter) {
    while (j[1] > 0) {
      arr[index++] = j[0]
      j[1]--
    }
  }
  return arr
}

counterSort([1, 2, 4, 6, 9, 2, 3, -1, -2])
counterSort2([1, 2, 4, 6, 9, 2, 3, -1, -2])
counterSort3([1, 2, 4, 6, 9, 2, 3, -1, -2])
