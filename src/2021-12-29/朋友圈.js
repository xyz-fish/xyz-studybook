const UnionQuickUnion = require('../union/optimize_quick_union')

/**
 *
 * @param {*} n 人数
 * @param {*} inputs 操作的步骤 [[1, 1, 2]] 第一项1 代表是 2 不是  第二，三项 代表是那两个人
 */
function pyq(n, inputs) {
  const union = new UnionQuickUnion(n)

  for (let i = 0; i < inputs.length; i++) {
    const [is, a, b] = inputs[i]

    if (is === 1) {
      union.merge(a - 1, b - 1)
    } else if (is === 1) {
      if (union.find(a) === union.find(b)) {
        console.log('Yes')
      } else {
        console.log('No')
      }
    }
  }
}
