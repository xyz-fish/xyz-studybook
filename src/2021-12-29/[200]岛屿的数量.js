const UnionSet = require('../union')

var numIslands = function (grid) {
  const n = grid.length
  const m = grid[0].length
  const lands = new UnionSet(n * m)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue
      if (grid[i][j] === '1') {
        const index = i * m + j
        if (j > 0 && grid[i][j - 1] === '1') {
          lands.merge(index - 1, index)
        }

        if (i > 0 && grid[i - 1][j] === '1') {
          lands.merge((i - 1) * m + j, index)
        }
      }
    }
  }
  let r = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1' && i * m + j === lands.get(i * m + j)) {
        r++
      }
    }
  }
  return r
}
