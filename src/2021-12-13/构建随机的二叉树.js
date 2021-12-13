// 理解前序遍历和中序遍历
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function insertRandomNode(root, val) {
  if (root === null) return new TreeNode(val)
  if (Math.random() > 0.5) {
    root.left = insertRandomNode(root.left, val)
  } else {
    root.right = insertRandomNode(root.right, val)
  }

  return root
}

function buildRandomTree(n) {
  let root = null
  for (let i = 1; i <= n; i++) {
    root = insertRandomNode(root, i)
  }

  return root
}

const randomTree = buildRandomTree(10)

// 输出前序遍历

let preInput = ''
function preOrderInput(root) {
  if (root === null) return preInput
  preInput += root.val + ' '
  preOrderInput(root.left)
  preOrderInput(root.right)
}

let inInput = ''
function inOrderInput(root) {
  if (root === null) return
  inOrderInput(root.left)
  inInput += root.val + ' '
  inOrderInput(root.right)
}

let afInput = ''
function afOrderInput(root) {
  if (root === null) return
  afOrderInput(root.left)
  afOrderInput(root.right)
  afInput += root.val + ' '
}

console.log(randomTree)

preOrderInput(randomTree)

inOrderInput(randomTree)

afOrderInput(randomTree)

console.log(preInput)
console.log(inInput)
console.log(afInput)

exports.buildRandomTree = buildRandomTree
