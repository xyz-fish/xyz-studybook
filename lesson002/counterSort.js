function counterSort(arr) {
  // 找出最大值和最小值
  const max = Math.max.apply(null, arr)
  const min = Math.min.apply(null, arr)

  // 创建一个计数的数组
  const counter = Array.from({ length: max - min + 1 }).fill(0)

  for (let i = 0; i < arr.length; i++) {
    const count = arr[i]
    counter[count]++
  }

  let index = 0

  let res = []

  for (let i = 0; i < counter.length; i++) {
    while (counter[i] >= min) {
      arr[index++] = i
      counter[i]--
    }
  }

  console.log(arr)
  return arr
}

counterSort([1, 2, 4, 6, 9, 2, 3])
