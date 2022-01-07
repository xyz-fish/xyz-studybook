// * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
function getTrees(start, end) {
  // 这里处理边界情况要包含null
  if (start > end) return [null]

  const res = []

  for (let i = start; i <= end; i++) {
    const lefts = getTrees(start, i - 1)
    const rights = getTrees(i + 1, end)

    for (const lt of lefts) {
      for (const rt of rights) {
        const root = new TreeNode(i)
        root.left = lt
        root.right = rt

        res.push(root)
      }
    }
  }

  return res
}

var generateTrees = function (n) {
  if (n === 1) return [new TreeNode(1)]

  return getTrees(1, n)
}
