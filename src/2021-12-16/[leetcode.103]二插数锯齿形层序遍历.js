const { buildRandomTree } = require('../2021-12-13/构建随机的二叉树')
/**
 * 在层级遍历基础上， 当 单数层的时候 从左侧加上， 双数层的时候 从右侧开始加入，
 * 需要一个变量 index 记录层数
 * @param {*} root
 * @returns
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return []
  const res = []
  let stack = [root]
  let level = 1
  while (stack.length) {
    const levelVal = []
    const tmp = []
    const len = stack.length
    for (let i = 0; i < len; i++) {
      if (level % 2 === 1) {
        levelVal.push(stack[i].val)
      } else {
        levelVal.push(stack[len - 1 - i].val)
      }

      if (stack[i].left) tmp.push(stack[i].left)
      if (stack[i].right) tmp.push(stack[i].right)
    }
    level++
    res.push(levelVal)
    stack = tmp
  }

  return res
}

function zigzagLevelOrderF(root) {
  if (root === null) return []
  return dfs(root, 1)
}

function dfs(root, index, res = []) {
  if (res.length < index) {
    res.push([])
  }

  if (root.left) dfs(root.left, index + 1, res)
  if (root.right) dfs(root.right, index + 1, res)
  if (index % 2 === 1) {
    res[index - 1].push(root.val)
  } else {
    res[index - 1].unshift(root.val)
  }
  return res
}

const root = buildRandomTree(10)

console.log(zigzagLevelOrder(root))
console.log(zigzagLevelOrderF(root))
