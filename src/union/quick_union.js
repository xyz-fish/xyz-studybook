class UnionQuickUnion {
  constructor(n) {
    this.gather = Array.from({ length: n }).map((_, ind) => ind)
  }

  find(x) {
    if (this.gather[x] === x) return x
    return this.find(this.gather[x])
  }

  merge(a, b) {
    const fa = this.find(a)
    const fb = this.find(b)
    if (fa === fb) return

    this.gather[fb] = fa
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
