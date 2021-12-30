// * https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column/
const UnionSet = require('../union')

var removeStones = function (stones) {
  const n = stones.length
  const u = new UnionSet(n)

  const mapX = new Map()
  const mapY = new Map()
  let r = n
  for (let i = 0; i < n; i++) {
    const [x, y] = stones[i]
    let isline = false
    if (!mapX.has(x)) {
      mapX.set(x, i)
    } else {
      u.merge(mapX.get(x), i)
    }

    if (!mapY.has(y)) {
      mapY.set(y, i)
    } else {
      u.merge(mapY.get(y), i)
    }
  }

  for (let i = 0; i < n; i++) {
    if (i === u.find(i)) {
      r--
    }
  }

  return r
}
