// * https://leetcode-cn.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * 有小括号的最大深度
 */

// 1. 有效括号的情况下 出现了‘(’ 必然深度加1，当出现'）'代表这个层级结束了 也会有嵌套的情况,每层嵌套需要加1
// 2. () (()) 出现多个同层级的括号的时候，这个时候需要比较同层级深度
// 3. 结合前两点， 需要 一个 记录 前面同层级的最大深度，当括号闭合 则 重新在记录 通过++ --

function maxDepth(s) {
  let max = 0
  let sDepth = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      sDepth++
      max = Math.max(max, depth)
    } else {
      sDepth--
    }
  }

  return max
}
