// * https://leetcode-cn.com/problems/sort-characters-by-frequency

// hash 表记录下评率出现次数 然后排序 最后
// TODO: 桶排序 方法
/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const hash = {}
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined) {
      hash[s[i]]++
    } else {
      hash[s[i]] = 1
    }
  }

  const sortedArr = Object.entries(hash).sort((a, b) => {
    if (b[1] - a[1] === 0) return -1
    return b[1] - a[1]
  })
  let r = ''
  sortedArr.forEach((w) => {
    for (let i = 0; i < w[1]; i++) {
      r += w[0]
    }
  })
  return r
}
