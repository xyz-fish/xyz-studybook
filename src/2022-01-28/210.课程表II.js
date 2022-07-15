// * https://leetcode-cn.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
  //1. 先用一个数组存储每个课程的“入度”（需要先学习的课程）
  const penetration = Array.from({ length: numCourses }).fill(0)
  const len = prerequisites.length

  for (let i = 0; i < len; i++) {
    penetration[prerequisites[i][0]]++
  }

  // 2. 根据入度的关系，确认是否有环
  // 先找到入度为0（也就是没有需要前置学习的，可以直接学些的课程）的课程
  const canLearns = []
  for (let i = 0; i < numCourses; i++) {
    if (penetration[i] === 0) {
      canLearns.push(i) // 把这个课程
    }
  }

  // 如果每个课程的入度都大于1（head长度为0） 则说明必定是有环的，也就没法学习课程
  // 找到了可以直接先学的课程，然后“学掉他”, 然后去解放其他可以学习的课程

  // 用一个变量定义学习课程的数量
  let counter = 0

  const r = []

  while (canLearns.length) {
    const cur = canLearns.pop()
    r[counter++] = cur

    for (let i = 0; i < len; i++) {
      const item = prerequisites[i]
      // 找到已学习的课程的后续课程
      if (cur === item[1]) {
        // 消除这个后续课程的一个度（需要前置学习的课程数量）
        penetration[item[0]]--

        if (penetration[item[0]] === 0) {
          // 满足条件的时候加入可以学习的课程队列
          canLearns.push(item[0])
        }
      }
    }
  }

  // 学完了则true
  return counter === numCourses ? r : []
}
