/**
 * 在一个地图中(地图由 n*n 个区域组成），有部 分区域被感染病菌。感染区域每天都会把周围（ 上下左右）的 4 个区域感染
 * https://blog.csdn.net/weixin_44505462/article/details/125494603
 * @param {string} input 输入的字符串 exp： '0,1,1,1'
 * @returns {number} days
 */

// 思路：找寻到感染的位置（1）,然后把**每次上下左右的全部变成1**
// 构建一个二维数组 n * n 的 遍历每个位置, 全部已感染(都是1) 则 返回 false 停止感染， 全部未感染 则 返回false 停止感染， 0 和 1共存则执行感染
// 两个点： 判断 是否需要进行感染操作 和 进行感染操作

function getContagionDay(input) {
  // step1: 整理输入的input, 构建一个二位数组
  const iArr = input.split(',')
  const l = iArr.length
  const n = Math.sqrt(l)
  let source = Array.from({ length: n }).map((_, i) =>
    Array.from({ length: n }).map((_, j) => parseInt(iArr[j + i * n]))
  )

  // step2: 去求天数
  let day = 0

  // 当需要进行感染操作的时候(通过一个方法判断： check)
  while (check(source, n)) {
    // 进行感染操作并 赋值更新
    source = contagion(source, n)
    // 天数+1
    day++
  }
  // 根据题意 如果未进行过感染 则返回-1
  return day || -1
}

/**
 * 判断是否需要进行感染的函数
 * 全是1 或 0 则返回false, 0 和 1 都存在则返回
 * @param {number[]} arr
 * @param {n} n
 * @returns
 */
function check(arr, n) {
  // 通过两个表示判断是否已存在0 或 1
  let has1 = false
  let has0 = false
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) {
        has0 = true
        if (has1) return true
      } else {
        has1 = true
        if (has0) return true
      }
    }
  }

  return false
}

/**
 * 感染的函数： 需要对二位数组上下左右 进行赋值1的操作, 需要一个额外的空间 存储每次操作 防止改变原二维数组
 * @param {*} arr
 * @param {*} n
 * @returns
 */
function contagion(arr, n) {
  const temp = Array.from({ length: n }).map(() => [])

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp[i][j] = arr[i][j]
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const c = arr[i][j]
      if (c === 1) {
        // 上下左右的判断

        // 左
        if (j - 1 >= 0) {
          temp[i][j - 1] = 1
        }
        // 上
        if (i - 1 >= 0) {
          temp[i - 1][j] = 1
        }
        // 右
        if (j + 1 <= n - 1) {
          temp[i][j + 1] = 1
        }
        // 下
        if (i + 1 <= n - 1) {
          temp[i + 1][j] = 1
        }
      }
    }
  }
  return temp
}

console.log(getContagionDay('1,0,1,0,0,0,1,0,1'))
console.log(getContagionDay('0,0,0,0'))
console.log(getContagionDay('1,1,1,1'))
