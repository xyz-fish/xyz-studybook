function getValues(n) {
  let res = 0
  while (n > 0) {
    res += (n % 10) ** 2
    n = parseInt(n / 10)
  }
  console.log(res)
  return res
}

getValues(4)

function isHappy(n) {
  if (n === 1) return 1
  let slow = n
  let fast = getValues(getValues(n))
  if (slow !== fast && fast !== 1) {
    slow = getValues(slow)
    fast = getValues(fast)
  }

  return slow === 1
}
