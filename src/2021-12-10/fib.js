// 0 1 1 2 3 5 8 13 21

function fib1(n) {
  if (n < 2) return n
  return fib1(n - 1) + fib1(n - 2)
}

function fib2(n) {
  if (n < 2) return n
  let r = Array.from({ length: n + 1 })
  r[0] = 0
  r[1] = 1

  for (let i = 2; i < n + 1; i++) {
    r[i] = r[i - 1] + r[i - 2]
  }

  return r[n]
}

function fib3(n) {
  if (n < 2) return n
  let r = 1
  let f = 0
  let s = 1

  for (i = 2; i <= n; i++) {
    r = f + s
    f = s
    s = r
  }

  return r
}

function fib4(n, n1 = 1, n2 = 0) {
  if (n === 0) return n2
  if (n === 1) return n1

  return fib4(n - 1, n1 + n2, n1)
}
console.log(fib1(11))
console.log(fib2(11))
console.log(fib3(11))
console.log(fib4(11))

// 题目中 需要对 10000007 取余 放置数过大
