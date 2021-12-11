var hasPathSum = function (root, targetSum) {
  if (root === null) return false
  const rootVal = root.val
  const nextVal = targetSum - rootVal

  if (nextVal === 0 && root.left === null && root.right === null) return true

  const left = root.left && hasPathSum(root.left, nextVal)
  const right = root.right && hasPathSum(root.right, nextVal)

  if (left || right) return true
  return false
}
