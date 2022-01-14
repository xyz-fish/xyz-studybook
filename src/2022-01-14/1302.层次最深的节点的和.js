// * Link: https://leetcode-cn.com/problems/deepest-leaves-sum/

/**
 * 方法1：广度优先: 层序遍历就是广度优先  层序遍历：把最后一层的数相加
 * @param {*} root
 * @returns
 */
function levelOrder(root) {
  if (root === null) return 0
  let stack = [root]
  let r = []
  while (stack.length) {
    const temp = []
    for (let i = 0; i < stack.length; i++) {
      const node = stack[i]
      if (node.left) temp.push(node.left)
      if (node.right) temp.push(node.right)
    }

    if (temp.length === 0) {
      r = stack
    }
    stack = temp
  }

  return r.reduce((a, b) => a + b.val, 0)
}

var deepestLeavesSum = function (root) {
  return levelOrder(root)
}

/**
 * 深度优先: 记录深度(初始化深度值-1) 走到大于深度的时候更新这个值， 并重置 ·和· 小于的时候不做处理 等于的之后 ·和· +
 * @param {*} root
 */

function deepestLeavesSum2(root) {
  let maxDepth = -1,
    total = 0
  function dfs(node, depth) {
    if (node === null) return 0

    if (depth > maxDepth) {
      maxDepth = depth
      total = node.val
    } else if (depth === maxDepth) {
      total += node.val
    }

    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }

  dfs(root, 0)

  return total
}
