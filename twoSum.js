const nums = [2, 7, 11, 15];
const target = 9;

// SOLUTION 01
// TIME COMPLEXITY = 0(Nˆ2)
// SPACE COMPLEXITY = 0(1)

var twoSum = function (nums, target) {
  for (let l = nums.length - 1; l >= 0; l--) {
    for (r = 0; r < nums.length - 1; r++) {
      if (nums[r] + nums[l] === target) {
        return [r, l];
      }
    }
  }
};

console.log(twoSum(nums, target));
