class UnionSet {
  constructor(n) {
    this.gather = Array.from({ length: n }).map((_, i) => i)
  }

  get(x) {
    return (this.gather[x] =
      this.gather[x] === x ? x : this.get(this.gather[x]))
  }

  merge(a, b) {
    this.gather[this.get(b)] = this.get(a)
  }
}

const union = new UnionSet(8)

union.merge(0, 1)
console.log(union.gather)
union.merge(1, 3)
console.log(union.gather)
console.log(union.get(3))
union.merge(4, 6)
console.log(union.gather, union.get(6))

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
