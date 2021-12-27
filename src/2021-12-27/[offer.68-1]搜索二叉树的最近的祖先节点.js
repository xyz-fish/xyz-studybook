// * The https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/

var lowestCommonAncestor = function (root, p, q) {
  if (p.val > q.val) {
    let tmp = q
    q = p
    p = tmp
  }
  let cur = root
  if (
    p.val === cur.val ||
    q.val === cur.val ||
    (p.val < cur.val && q.val > cur.val)
  ) {
    console.log(13)
    return cur
  } else if (p.val > cur.val) {
    return lowestCommonAncestor(cur.right, p, q)
  } else {
    return lowestCommonAncestor(cur.left, q, p)
  }
}
