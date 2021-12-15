const { buildRandomTree } = require('../2021-12-13/构建随机的二叉树')

const root = buildRandomTree(6)

console.log(JSON.stringify(root))

// 递归
function preorder(root, ret = []) {
  if (root === null) return null
  ret.push(root.val)
  preorder(root.left, ret)
  preorder(root.right, ret)
  return ret
}

function inorder(root, ret = []) {
  if (root === null) return ret
  inorder(root.left, ret)
  ret.push(root.val)
  inorder(root.right, ret)
  return ret
}

function postorder(root, ret = []) {
  if (root === null) return ret
  postorder(root.left, ret)
  postorder(root.right, ret)
  ret.push(root.val)
  return ret
}

// 遍历
function preorderF(root) {
  const stack = [root]
  const ret = []
  while (stack.length) {
    const node = stack.pop()
    ret.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return ret
}

function inorderF(root) {
  if (root === null) return []
  const ret = []
  const stack = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    const node = stack.pop()
    ret.push(node.val)

    root = node.right
  }

  return ret
}

function postorderF(root) {
  const stack = []
  const ret = []
  let prev = null
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    // 7 => 4
    root = stack.pop()
    if (root.right && root.right !== prev) {
      stack.push(root)
      root = root.right
    } else {
      ret.push(root.val)
      prev = root
      root = null
    }
  }
  return ret
}

console.log(preorder(root))
console.log(preorderF(root))
console.log(inorder(root))
console.log(inorderF(root))
console.log(postorder(root))
console.log(postorderF(root))
