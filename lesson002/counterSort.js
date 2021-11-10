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

  return arr
}

counterSort([1, 2, 4, 6, 9, 2, 3, -1, -2])
