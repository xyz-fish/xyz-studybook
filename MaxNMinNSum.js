/**
 * 给定一个数组，编写一个函数来计算它的最大 N 个 数与最小 N 个数的和。你需要对数组进行去重。
 * https://blog.csdn.net/weixin_47243236/article/details/123780171
 * @param {number} m 读取的数字的数量
 * @param {number[]} arr 读取转化后的数组
 * @param {number} n 读取最大和最小的数量
 * @returns {number} 最大N最小N和 最大最小有重复的 返回-1
 */

function sumNMaxMin(m, arr, n) {
  // step1: 去重并排序(升序 降序 都可以)
  // desc: 1. 去重 - 是按照题意 2. 排序 - 为了更好的确定最大N和最小N的位置
  const temp = [...new Set(arr)].sort((a, b) => a - b)
  const l = temp.length

  // step2: 如果 step1 后的 数组 长度小于 最大N和最小N个数 及2 * n 则 一定存在 最大N 和最小N 中有相同的 我们返回-1
  if (l < 2 * n) {
    return -1
  }
  // step3： 确定最大最小没有相同后， 我们在已排序的基础上 求前后N个的和 得到我们的结果
  let r = 0
  for (let i = 0; i < n; i++) {
    r += temp[i] + temp[l - i - 1]
  }

  return r
}

console.log(sumNMaxMin(5, [95, 88, 83, 64, 100], 2))

console.log(sumNMaxMin(5, [3, 2, 4, 3, 2], 2))
