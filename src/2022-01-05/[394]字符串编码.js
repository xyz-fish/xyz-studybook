// * https://leetcode-cn.com/problems/decode-string/

const nreg = /\d{1}/

var decodeString = function (s) {
  const stack = []
  const stackN = []
  let r = ''
  let i = 0
  while (i < s.length) {
    if (nreg.test(s[i])) {
      let n = s[i]
      while (nreg.test(s[++i])) {
        n += s[i]
      }

      stackN.push(parseFloat(n))
      stack.push('')
    } else {
      if (!stackN.length) {
        r += s[i]
      } else {
        if (s[i] === ']') {
          const t = stack.pop()
          const tn = stackN.pop()
          if (stack.length) {
            stack[stack.length - 1] += t.repeat(tn)
          } else {
            r += t.repeat(tn)
          }
        } else {
          stack[stackN.length - 1] += s[i]
        }
      }
    }
    i++
  }

  return r
}
