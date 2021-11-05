/**
 * 给出 {}、[]、() 的组合 判断是否是正确的括号的组合
 */

// 常见一个大括号左右映射的对象
const bkts = {
  '{': '}',
  '(': ')',
  '[': ']'
}

// 记录遍历的次数
let index = 0

// 通过栈(先入后出) 把 出现左括号 存，如果出现右侧括号，和出栈的对比 是否匹配 如果不匹配 则false
function isValid(str) {
  const stack = []
  let ret = true

  for (let i = 0; i < str.length; i++) {
    const cur = str[i]
    if (bkts[cur]) {
      stack.push(cur)
    } else {
      // 如果加stack.length的判断 一开始是Right的多出循环一直到遇到Left
      if (cur !== bkts[stack.pop()]) {
        ret = false
        break
      }
    }
    index++
  }

  return !stack.length && ret
}

console.log(isValid(')))))))))((][(])'), index)
