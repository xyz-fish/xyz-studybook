function kthGammer(n, k) {
  if (n === 1) return 0

  // 更具题意和规格可以判断出 第n个前nLen/2个是n - 1的值
  if (k % 2 === 0) {
    return kthGammer(n - 1, k / 2) === 0 ? 1 : 0
  } else {
    return kthGammer(n - 1, Math.floor(k / 2) + 1)
  }
}

// 0, 1, 6, 105, 27030
// 0 => 01 => 0110 => 01101001 => 0110100110010110
