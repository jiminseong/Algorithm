// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function (nums) {
//   var result = [[]];

//   for (let num of nums) {
//     const newSubsets = [];
//     for (let subset of result) {
//       newSubsets.push([...subset, num]);
//     }
//     result.push(...newSubsets);
//   }

//   console.log(result);
//   return result;
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var result = [];

  const generateSubSet = (index, subset) => {
    if (index === nums.length) {
      result.push([...subset]);
      return;
    }

    // 현재 숫자를 포함한 경우
    subset.push(nums[index]);
    generateSubSet(index + 1, subset);
    subset.pop();

    // 현재 숫자를 포함하지 않은 경우
    generateSubSet(index + 1, subset);
  };

  generateSubSet(0, []);
  console.log(result);
  return result;
};

subsets([1, 2, 3]);
