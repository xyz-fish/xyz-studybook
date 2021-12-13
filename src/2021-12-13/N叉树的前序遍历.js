// 递归
function preorder(root, r = []) {
  if (root === null) return r
  r.push(root.val)

  root.children.forEach(function (node) {
    preorder(node, r)
  })

  return r
}

// 迭代

function preorderf(root) {
  if (root === null) return

  // 存储下单前未遍历的的节点
  const stack = [root]
  const ret = []
  while (stack.length !== 0) {
    const node = stack.pop()
    ret.push(node.val)

    // 根据栈的特性 需要把反过来放到栈中
    for (let i = node.children.length; i > 0; i--) {
      stack.push(node.children[i - 1])
    }
  }

  return ret
}
