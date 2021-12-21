const Heap = require('../Heap')

var Twitter = function () {
  this.users = {}
  this.max = 10
  this.postIndex = 0
}

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.users[userId]) this.users[userId] = { heap: [], followeeId: [] }
  this.users[userId].heap.push({ timemap: this.postIndex++, tweetId })
}

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.users[userId]) return []
  const { followeeId } = this.users[userId]
  const showHeap = new Heap()

  const maps = [userId, ...followeeId]

  for (let i = 0; i < maps.length; i++) {
    const curFollowee = this.users[maps[i]]

    if (curFollowee) {
      const followeeHeapData = curFollowee.heap

      for (let j = 0; j < followeeHeapData.length; j++) {
        showHeap.push(followeeHeapData[j])
        if (showHeap.size() > this.max) {
          showHeap.pop()
        }
      }
    }
  }

  const res = []
  for (let i = 0; i < this.max && showHeap.size(); i++) {
    res.push(showHeap.top().tweetId)
    showHeap.pop()
  }

  return res.reverse()
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.users[followerId]) {
    this.users[followerId] = { heap: [], followeeId: [] }
  }

  if (this.users[followerId].followeeId.indexOf(followeeId) > -1) return

  this.users[followerId].followeeId.push(followeeId)
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  this.users[followerId].followeeId = this.users[followerId].followeeId.filter(
    (v) => v !== followeeId
  )
}

function defaultCompare(a, b) {
  return a.timemap - b.timemap < 0
}
