// * https://leetcode-cn.com/problems/longest-consecutive-sequence/

class UnionSet {
  constructor(n) {
    this.gather = Array.from({ length: n }).map((_, i) => i)
    this.size = Array.from({ length: n }).fill(1)
  }

  find(x) {
    if (this.gather[x] === x) return x
    const root = this.find(this.gather[x])
    this.gather[x] = root
    return root
  }

  merge(a, b) {
    if (this.find(a) === this.find(b)) return
    // 这里去记录下每个合集的大小
    this.size[this.find(a)] += this.size[this.find(b)]

    this.gather[this.find(b)] = this.find(a)
  }

  get() {
    return this.gather
  }
}

var longestConsecutive = function (nums) {
  const n = nums.length
  if (n === 0) return 0
  const map = new Map()
  const u = new UnionSet(n)

  for (let i = 0; i < n; i++) {
    const val = nums[i]
    if (map.has(val)) continue
    map.set(val, i)
  }

  for (let i = 0; i < n; i++) {
    const val = nums[i]
    // 两个条件 如果 val - 1 存在 & 是否已经被merge
    if (map.get(val - 1) && u.find(map.get(val)) !== u.find(map.get(val - 1))) {
      u.merge(map.get(val - 1), i)
    }
    // 两个条件 如果 val - 1 存在 & 是否已经被merge
    if (map.get(val + 1) && u.find(map.get(val)) !== u.find(map.get(val + 1))) {
      u.merge(map.get(val + 1), i)
    }
  }

  // return 最大的合集的size

  return Math.max(...u.size)
}
