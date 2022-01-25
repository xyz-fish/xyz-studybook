// * https://leetcode-cn.com/problems/partition-labels/

// 暴力解法

// 思路：
// 通过map记录已经在一组的的字母， 每次遍历去查找后面的map有没有 记录最后一个有的下标
function partitionLabels(s, l = 0, ret = []) {
  const len = s.length
  if (l === len) return ret

  let end = (temp = l)
  const set = new Set()
  set.add(s[l - 1])

  do {
    temp = end

    for (let i = temp; i < len; i++) {
      if (set.has(s[i])) {
        end = i
      }
    }

    for (let i = temp; i < end; i++) {
      set.add(s[i])
    }
  } while (end > temp && end < len)

  ret.push(end - l + 1)

  partitionLabels(s, end + 1, ret)

  return ret
}

// 贪心：
// 先去确定相同字母 最后的一个的下标
// 再去遍历： 再未到 出现了的字母的最后一个位置的时候，会有其他字母 确定下其他字母的最后位置的下标 这样就会更新下标， 当遍历到这个end的时候 来去这个长度
// 取长度： 已确定end 再来一个左边的下标
function partitionLabels(s) {
  const labels = Array.from({ length: 26 }),
    len = s.length
  const base = 'a'.codePointAt()
  for (let i = 0; i < len; i++) {
    labels[s.codePointAt(i) - base] = i
  }

  let start = 0,
    end = 0
  const ret = []
  for (let i = 0; i < len; i++) {
    end = Math.max(end, labels[s.codePointAt(i) - base])

    if (i === end) {
      ret.push(end - start + 1)
      start = end + 1
    }
  }

  return ret
}
