// * https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/
const UnionSet = require('../union')
var makeConnected = function (n, connections) {
  const union = new UnionSet(n)
  const len = connections.length
  let surplusLine = 0
  let r = 0
  for (let i = 0; i < len; i++) {
    if (i < len) {
      const [net1, net2] = connections[i]
      if (union.find(net1) === union.find(net2)) {
        surplusLine++
      } else {
        union.merge(net1, net2)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (union.find(i) === i) {
      r++
    }
  }

  return r - 1 > surplusLine ? -1 : r - 1
}
