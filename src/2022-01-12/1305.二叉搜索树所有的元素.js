function inorder(root, r = []) {
  if (root === null) return r

  inorder(root.left, r)
  r.push(root.val)
  inorder(root.right, r)
  return r
}

var getAllElements = function (root1, root2) {
  const l = inorder(root1)
  const r = inorder(root2)

  let p = 0,
    q = 0,
    k = 0

  const ret = [],
    ln = l.length,
    rn = r.length

  while (p < ln || q < rn) {
    if (q >= rn || (p < ln && l[p] < r[q])) {
      ret[k++] = l[p++]
    } else {
      ret[k++] = r[q++]
    }
  }

  return ret
}
