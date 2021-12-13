function reverseTreeNode(root) {
  if (root === null) return null
  const tmp = root.left
  root.left = reverseTreeNode(root.right)
  root.right = reverseTreeNode(tmp)
  return root
}
