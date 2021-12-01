function maxPower(s) {
  let ans = 1,
    cnt = 1
  for (let i = 1; i < s.length; ++i) {
    if (s[i] == s[i - 1]) {
      ++cnt
      ans = Math.max(ans, cnt)
    } else {
      cnt = 1
    }
  }
  return ans
}

/** 
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。

给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
bills = [5,5,5,10,20] true
bills = [5,5,10,10,20] false
bills = [5,5,10] true
bills = [10, 10] false
*/

function lemonadeChange(p) {
  if (p[0] !== 5) return false
  let fiveCount = 1
  let tenCount = 0
  for (let i = 1; i < p.length; i++) {
    if (p[i] === 5) {
      fiveCount++
    } else {
      if (fiveCount <= 0) return false

      if (p[i] === 10) {
        fiveCount--
        tenCount++
      } else {
        if (!(tenCount >= 1 || fiveCount >= 3)) return false
        if (tenCount >= 1) {
          tenCount--
          fiveCount--
        } else {
          fiveCount -= 3
        }
      }
    }
  }
  return true
}

console.log(lemonadeChange([5, 5, 10]))
