//* 地址 https://leetcode-cn.com/problems/symmetric-tree/
const { isSameTree } = require('./[100]相同的数.js')
// 方法1- 递归
// 利用相同的数 把right想转后看是否相同

// right的节点对换 然后和 left 对比是否一样
function transform(node) {
  if (node === null) return null

  const tmp = node.left
  node.left = transform(node.right)
  node.right = transform(tmp)
  return node
}

function isSymmetric(root) {
  if (root === null) return true

  const transformRight = transform(root.right)

  return isSameTree(root.left, transformRight)
}

// * 方法二 递归

// 更节点不用判断 左右情况先找出false情况 直接return 当都是null 也是true 其他情况去比较两个节点的左右相对对比
function compare(left, right) {
  if (
    (left && !right) ||
    (!left && right) ||
    (left && right && left.val !== right.val)
  )
    return false

  if (!left && !right) return true

  return compare(left.left, right.right) && compare(left.right, right.left)
}

function isSymmetric2(root) {
  if (root === null) return true

  return compare(root.left, root.right)
}

// * 方法3 迭代
// 1. 先做遍历到左 右遍历到右, 然后再left.right right.left 遍历
function isSymmetric3(root) {
  // 先空
  if (root === null) return true

  let left = root.left
  let right = root.right

  // 找两个栈存起来左右
  const leftStack = []
  const rightStack = []

  // 这里循环值需要leftStack 因为leftStack 和 rightStack push pop是同步的
  while ((left && right) || leftStack.length) {
    while (left && right) {
      if (left.val !== right.val) return false // 不相等时直接return false
      leftStack.push(left.left)
      rightStack.push(right.right)
      left = left.left
      right = right.right
    }

    // 这里判断下 left right 有一部位空的情况
    if ((left && !right) || (!left && right)) return false

    const leftNode = leftStack.pop()
    const rightNode = rightStack.pop()
    left = leftNode.right
    right = leftNode.left
  }

  // 当left和right都是空时才能是true
  return !left && !right
}
