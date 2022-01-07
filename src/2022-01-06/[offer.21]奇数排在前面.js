// * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

var exchange = function (nums) {
  let oddInd = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      const tmp = nums[i]
      nums[i] = nums[oddInd]
      nums[oddInd] = tmp

      oddInd++
    }
  }

  return nums
}


// fn2
var exchange = function(nums) {
	const n = nums.length
	let oddInd = 0
	let evenInd = n - 1

	let i = 0

	while(oddInd < evenInd) {
		 if (nums[oddInd] % 2 === 0 && nums[evenInd] % 2) {
				swap(nums, oddInd, evenInd) 
				oddInd++
				evenInd--
		 } else if (nums[oddInd] % 2 && nums[evenInd] % 2 === 0) {
				 oddInd++
				 evenInd--
		 } else if (nums[oddInd] % 2) {
				 oddInd++
		 } else {
				 evenInd--
		 }
	}

	return nums
};

function swap(arr, i, j) {
	const tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
