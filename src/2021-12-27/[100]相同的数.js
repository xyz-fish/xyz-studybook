// * 地址 https://leetcode-cn.com/problems/same-tree/

function isSameTree(p, q) {
  if (p === null && q === null) return true

  // p 和 q 节点val 相同的时候 取反 return false
  // 其他情况继续判断
  if (!(p !== null && q !== null && q.val === p.val)) return false

  const leftSame = isSameTree(p.left, q.left)

  if (!leftSame) return false

  const rightSame = isSameTree(p.right, q.right)

  if (!rightSame) return false

  return true
}

module.exports = {
  isSameTree: isSameTree
}
