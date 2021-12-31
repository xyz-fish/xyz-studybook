// * https://leetcode-cn.com/problems/smallest-string-with-swaps/

// ? 最后插入排序超时。。。why

class UnionSet {
  constructor(n) {
    this.gather = Array.from({ length: n }).map((_, i) => i)
  }

  find(x) {
    if (this.gather[x] === x) return x
    const root = this.find(this.gather[x])
    this.gather[x] = root
    return root
  }

  merge(a, b) {
    this.gather[this.find(b)] = this.find(a)
  }

  data() {
    return this.gather
  }
}

class Heap {
  constructor(compare) {
    this.compare = compare
    this.data = []
  }

  size() {
    return this.data.length
  }

  top() {
    return this.data[0]
  }

  push(val) {
    this.data.push(val)

    let index = this.size() - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const condition = this.compare(this.data[index], this.data[parentIndex])
      if (condition) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }

    return this.top()
  }

  pop() {
    if (this.size() === 0) return
    const lastOne = this.data.pop()
    let r
    if (this.size() > 0) {
      r = this.data[0]
      this.data[0] = lastOne

      let index = 0

      while (index * 2 + 1 < this.size()) {
        const leftIndex = index * 2 + 1
        const rightIndex = index * 2 + 2

        let findIndex = index

        const conditionL = this.compare(
          this.data[leftIndex],
          this.data[findIndex]
        )
        if (conditionL) {
          findIndex = leftIndex
        }

        const conditionR =
          rightIndex < this.size() &&
          this.compare(this.data[rightIndex], this.data[findIndex])

        if (conditionR) {
          findIndex = rightIndex
        }

        if (findIndex > index) {
          this.swap(findIndex, index)
          index = findIndex
        } else {
          break
        }
      }
    }
    return r === undefined ? lastOne : r
  }

  swap(i, j) {
    const tmp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = tmp
  }
}

var smallestStringWithSwaps = function (s, pairs) {
  const n = s.length

  const u = new UnionSet(n)

  const arr = Array.from({ length: n }).map(() => new Heap((a, b) => a < b))

  for (let i = 0; i < pairs.length; i++) {
    const [ind1, ind2] = pairs[i]

    u.merge(ind1, ind2)
  }

  for (let i = 0; i < n; i++) {
    arr[u.find(i)].push(s[i])
  }

  let r = ''

  for (let i = 0; i < n; i++) {
    r += arr[u.find(i)].top()
    arr[u.find(i)].pop()
  }

  return r
}
