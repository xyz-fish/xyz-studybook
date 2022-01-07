// * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

var exchange = function(nums) {
	let oddInd = 0
	const n = nums.length

	for(let i = 0; i < n; i++) {
			if (nums[i] % 2) {
					swap(nums, i, oddInd)
					oddInd++
			}
	}

	return nums
};

function swap(arr, i, j) {
	const tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
