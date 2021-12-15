const { buildRandomTree } = require('../2021-12-13/构建随机的二叉树')
// 层序遍历

// 迭代
function levelOrder(root) {
  if (root === null) return []
  let stack = [root]
  const res = []

  while (stack.length) {
    const len = stack.length
    const levelVal = []
    const tmpStack = []
    for (let i = 0; i < len; i++) {
      const node = stack[i]
      levelVal.push(node.val)

      if (node.left) tmpStack.push(node.left)
      if (node.right) tmpStack.push(node.right)
    }
    stack = tmpStack
    res.push(levelVal)
  }

  return res
}

// 递归
function levelOrderF(root) {
  if (root === null) return []
  const res = []

  dfs(root, 1, res)

  return res
}

function dfs(root, index, res) {
  if (res.length < index) {
    res.push([])
  }
  res[index - 1].push(root.val)
  if (root.left) dfs(root.left, index + 1, res)
  if (root.right) dfs(root.right, index + 1, res)
}

const root = buildRandomTree(6)

console.log(levelOrder(root))
console.log(levelOrderF(root))

// isOk
