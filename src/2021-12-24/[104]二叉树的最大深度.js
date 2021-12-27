// * 地址：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

function maxDepth(root, depth = 0) {
  if (root === null) return depth

  depth = Math.max(
    maxDepth(root.left, depth + 1),
    maxDepth(root.right, depth + 1)
  )
  return depth
}
