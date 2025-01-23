/**
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