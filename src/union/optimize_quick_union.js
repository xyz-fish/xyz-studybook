/**
 * 优化merge, 合并连个合计的时候， 哪个合集的节点更多，则保持该集合的值
 * 公司a 节点 > 公司b 节点 则 公司b 被归并到 公司a
 */

class UnionQuickUnion {
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
    return this.find(this.gather[x])
  }

  merge(a, b) {
    const fa = this.find(a)
    const fb = this.find(b)

    if (fa === fb) return

    const na = this.size[fa]
    const nb = this.size[fb]

    console.log(na, nb)

    if (na >= nb) {
      this.gather[fb] = fa
      this.size[fa] += nb
    } else {
      this.gather[fa] = fb
      this.size[fb] += na
    }
  }

  get() {
    return this.gather
  }
}

const union = new UnionQuickUnion(8)

union.merge(0, 1)
console.log(union.get())
union.merge(1, 3)
console.log(union.get())
console.log(union.find(3))
union.merge(4, 6)
console.log(union.get(), union.find(6))

/*
[
  0, 0, 2, 3,
  4, 5, 6, 7
]
[
  0, 0, 2, 0,
  4, 5, 6, 7
]
0
[
  0, 0, 2, 0,
  4, 5, 4, 7
] 4
*/

module.exports = UnionQuickUnion
