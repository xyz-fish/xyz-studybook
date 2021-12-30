// * https://leetcode-cn.com/problems/satisfiability-of-equality-equations/
const UnionSet = require('../union')
var equationsPossible = function (equations) {
  const len = equations.length
  const union = new UnionSet(26)

  for (let i = 0; i < len; i++) {
    const s = equations[i]
    if (s[1] === '!') continue
    const a = s.charCodeAt(0) - 97
    const b = s.charCodeAt(3) - 97
    union.merge(a, b)
  }
  for (let i = 0; i < len; i++) {
    const s = equations[i]
    if (s[1] === '=') continue
    const a = s.charCodeAt(0) - 97
    const b = s.charCodeAt(3) - 97
    if (union.find(a) === union.find(b)) {
      return false
    }
  }

  return true
}
