// * https://leetcode-cn.com/problems/h-index/

// 排序后确定

function hIndex(citations) {
  citations.sort((a, b) => a - b)

  const len = citations.length

  for (let i = 0; i < len; i++) {
    if (len - i <= citations[i]) {
      return len - i
    }
  }

  return 0
}
