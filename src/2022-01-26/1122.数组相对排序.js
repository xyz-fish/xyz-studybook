function relativeSortArray(arr1, arr2) {
  const len1 = arr1.length,
    len2 = arr2.length

  // 记录arr1中的存在次数，以便按照arr2去排
  const map = new Map()
  for (let i = 0; i < len1; i++) {
    const item = arr1[i]
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }

  // 定义新的数组
  const ret = Array.from({ length: len1 })
  let ind = 0
  // 先去排arr2中含有的元素
  for (let i = 0; i < len2; i++) {
    const item = arr2[i]
    let counter = map.get(item)

    while (counter--) {
      ret[ind++] = item
    }
    // 用完 删除去除掉arr2含有的元素
    map.delete(item)
  }

  // 剩余元素处理
  const temp = []
  for (const item of map) {
    let [value, i] = item
    while (i--) {
      temp.push(value)
    }
  }
  // 排序后再去塞值
  temp.sort((a, b) => a - b)

  for (let i = 0; i < temp.length; i++) {
    ret[ind++] = temp[i]
  }

  return ret
}
