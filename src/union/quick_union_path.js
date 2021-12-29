/**
 * 路径压缩
 */

class UnionQuick {
  constructor(n) {
    this.gather = Array.from({ length: n })
    this.size = Array.from({ length: n })

    for (let i = 0; i < n; i++) {
      this.gather[i] = i
      this.size[i] = 1
    }
  }

  find(x) {
    if (this.gather[x] === x) return x
    const root = this.find[this.gather[x]]
    // 这里查找的时候 让 x 放在根的下一级， 下次之后查找更快 结合了quick_find
    this.gather[x] = root
    return root
  }

  merge(a, b) {
    const fa = this.find(a)
    const fb = this.find(b)

    if (fa === fb) return

    const na = this.size[fa]
    const nb = this.size[fb]

    if (na >= nb) {
      this.gather[fb] = fa
      this.size[fa] += nb
    } else {
      this.gather[fa] = fb
      this.size[fb] += fa
    }
  }
}
