// * https://leetcode-cn.com/problems/couples-holding-hands/交换字符串中的元素

class UnionSet {
  constructor(n) {
    this.data = Array.from({ length: n })

    for (let i = 0; i < n; i++) {
      this.data[i] = i
    }
  }

  find(x) {
    if (this.data[x] === x) return x
    const root = this.find(this.data[x])
    this.data[x] = root
    return root
  }

  merge(a, b) {
    const fa = this.find(a)
    const fb = this.find(b)

    if (fa === fb) return
    this.data[fb] = fa
  }
}

var minSwapsCouples = function (row) {
  const n = row.length
  const u = new UnionSet(n / 2)

  // 每一组 （0， 1） （2， 3） 把没对情侣看做合计中的第i个
  // 合集处理我们需要把 i i + 1 看做1组
  for (let i = 0; i < n; i += 2) {
    // 确定两个人是不是情侣
    const a = (row[i] / 2) | 0
    const b = (row[i + 1] / 2) | 0
    // 等于的时候是
    if (a === b) continue
    // 则把两不同的情侣翻到一个集合里
    u.merge(a, b)
  }

  let r = 0

  // 每个合计去掉i = find(i)的 和相加

  for (let i = 0; i < n / 2; i++) {
    if (i !== u.find(i)) {
      r++
    }
  }

  return r
}
