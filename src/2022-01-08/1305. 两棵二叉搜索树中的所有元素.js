// * https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/

// 方法1： 分别中序遍历后 再 排序

function inorder(root, r = []) {
  if (root === null) return []

  inorder(root.left, r)
  r.push(root.val)
  inorder(root.right, r)
  return r
}

var getAllElements = function (root1, root2) {
  const r1 = inorder(root1)
  const r2 = inorder(root2)
  return [...r1, ...r2].sort((a, b) => (a - b > 0 ? 1 : -1))
}
