/**
 *  闯入一个 n 点
 * * quick_find 查找的时候更快 直接 找到集合中第x项 return this.gather的第x项
 */
class UnionQuickFind {
  constructor(n) {
    this.gather = Array.from({ length: n }).map((_, ind) => ind)
  }

  find(x) {
    return this.gather[x]
  }

  /**
   * 合并两个集合：把b合计
   * @param {*} a 0 <= a < n
   * @param {*} b 0 <= b < n
   */
  merge(a, b) {
    const fb = this.find(b)
    const fa = this.find(a)

    if (fa === fb) return

    for (let i = 0; i < this.gather.length; i++) {
      if (this.gather[i] === fb) this.gather[i] = fa
    }
  }

  get() {
    return this.gather
  }
}

const union = new UnionQuickFind(8)

union.merge(0, 1)
console.log(union.get())
union.merge(1, 3)
console.log(union.get())
console.log(union.find(3))
union.merge(4, 6)
console.log(union.get(), union.find(6))
