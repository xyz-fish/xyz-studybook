// 根据整数字符的也行遍历到中间位置判断
function validReverse(str) {
  str = str + ''
  let ret = true
  for (var i = 0; i <= Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      ret = false
      break
    } else if (i === str[str.length - 1]) {
      ret = true
    }
  }
  console.log(ret)
  return ret
}

// 双指针？
function intergerPalindrome(s) {
  if (s < 10) return false
  s += ''
  let start = 0
  let end = s.length - 1
  while (start <= end) {
    if (s[start] !== s[end]) {
      return false
    } else {
      start++
      end--
    }
  }
  return true
}

let c = 123321

validReverse(c)

console.log(intergerPalindrome(c))
