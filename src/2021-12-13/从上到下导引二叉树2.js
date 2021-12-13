function levelOrder(root) {
  if (root === null) return null

  let stack = [root]
  const ret = []

  while (stack.length) {
    let stackNext = []
    const tmp = []
    const len = stack.length
    for (let i = 0; i < len; i++) {
      const node = stack[i]
      tmp.push(node)
      if (node.left) stackNext.push(node.left)
      if (node.right) stackNext.push(node.right)
    }
    stack = stackNext
    ret.push(tmp)
  }

  return ret
}
