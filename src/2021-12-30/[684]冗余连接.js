// * https://leetcode-cn.com/problems/redundant-connection/
const UnionSet = require('../union')
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

var findRedundantConnection = function (edges) {
  const n = edges.length
  const union = new UnionSet(n)
  let r = []
  for (let i = 0; i < n; i++) {
    const [node1, node2] = edges[i]
    if (union.find(node1 - 1) === union.find(node2 - 1)) {
      r = edges[i]
    } else {
      union.merge(node1 - 1, node2 - 1)
    }
  }

  return r
}
