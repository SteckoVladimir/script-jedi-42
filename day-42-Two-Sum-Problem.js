//  https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
  let result = [];
    for (let i = 0; i < nums.length-1; i++) {
      for (let iter = i+ 1; iter < nums.length; iter++) {
        if ( nums[i] + nums[iter] === target) {
          result.push(i,iter);
        }
      }
    }
  return result;
};

// or !!!!!!!

const twoSum = function(nums, target) {
  let workArr = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i], y = target - x;
    if (workArr.has(y))
      return [workArr.get(y), i];
    workArr.set(x, i);
  }
};
