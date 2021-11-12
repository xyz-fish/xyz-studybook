var twoSum = function (nums, target) {
  var map = {}
  for (let i = 0; i < nums.length; i++) {
    // v: 2  v: 9 map: { 7 : 0}
    console.log(nums[i], map)
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]], i]
    }
    map[target - nums[i]] = i
  }
  return [0, 0]
}

console.log(twoSum([2, 7, 4, 6], 9))
