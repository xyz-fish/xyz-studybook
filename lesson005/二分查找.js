var search = function (nums, target) {
  var end = nums.length - 1
  var start = 0
  while (start <= end) {
    var mid = Math.floor((end - start) / 2) + start
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
    console.log(start, end, mid)
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 1))
