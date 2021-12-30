// * 1: 下标和值相等的数组
// * 2: 合并操作 -> 通过 改变值 下标对应值
// * 3. 通过下标的值 找到 和值相等的下标的那一项的值
// * 总结：下标 === 值 -> 下标 对应的值被 改变(合并)到另一个值中， 下标和值相等的是boss

class UnionSet {
  constructor(n) {
    this.gather = Array.from({ length: n }).map((_, i) => i)
  }

  find(x) {
    if (this.gather[x] === x) return x
    const root = this.find(this.gather[x])
    this.gather[x] = root
    return root
  }

  merge(a, b) {
    this.gather[this.find(b)] = this.find(a)
  }

  get() {
    return this.gather
  }
}

const union = new UnionSet(8)

union.merge(0, 1)
console.log(union.gather)
union.merge(1, 3)
console.log(union.gather)
console.log(union.find(3))
union.merge(4, 6)
console.log(union.gather, union.find(6))

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
