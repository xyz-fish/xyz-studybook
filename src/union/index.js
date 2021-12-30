// * 1: 下标和值相等的数组
// * 2: 合并操作 -> 通过 改变值 下标对应值
// * 3. 通过下标的值 找到 和值相等的下标的那一项的值
// * 总结：下标 === 值 -> 下标 对应的值被 改变(合并)到另一个值中， 下标和值相等的是boss

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

module.exports = UnionSet
