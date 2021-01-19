//  https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
  let result = [];
    for (let i = 0; i < nums.length; i++) {
      for (let iter = 1; iter < nums.length; iter++) {
        if ( nums[i] + nums[iter] === target) {
          result.push(i,iter)
        }
      }
    }
  return result;
};
