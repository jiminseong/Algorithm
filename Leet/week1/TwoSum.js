// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {};

// 첫번째 안
// 55 / 63 testcases passed
// Time Limit Exceeded 발생
// 예상 이유 : 불필요 연산

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var score = [];
  for (i = 0; i <= nums.length - 1; i++) {
    for (j = i + 1; j <= nums.length - 1; j++) {
      score.push([nums[i] + nums[j], i, j]);
    }
  }

  for (k = 0; k <= score.length + 1; k++) {
    if (score[k][0] === target) return [score[k][1], score[k][2]];
  }
};

// 발전 방향 : 왜? score을 만들지 바로 target과 비교하면 될듯

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var score = [];
  for (i = 0; i <= nums.length - 1; i++) {
    for (j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
