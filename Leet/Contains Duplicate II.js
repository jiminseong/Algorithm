// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j
// in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {};

// 첫번째 생각 : abs(i-j) <= k가 중요한데

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(j - i) <= k) {
        return true;
      }
    }
  }
  return false;
};

// 문제 : Time Limit Exceeded
// 이유 : 역시 이중 For문으로 시간복잡도 문제 발생
// 방향 : 이중 For문 대신  some() , indexOf(), lastIndexOf() 사용

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  nums.some(function (x) {
    if (nums.indexOf(x) !== nums.lastIndexOf(x)) {
      if (nums.lastIndexOf(x) - nums.indexOf(x) <= k) return true;
    }
  });

  return false;
};

// 문제 : break 필요함,
// 이유 : some에서 if문에서 return하더라도 종료되지 않음

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  return nums.some(function (x) {
    if (nums.indexOf(x) !== nums.lastIndexOf(x)) {
      if (nums.lastIndexOf(x) - nums.indexOf(x) <= k) {
        return true;
      }
    }
  });

  return false;
};

// 문제 : nums = [1,0,1,1], k = 1
// 이유 : 해당 케이스에서 true여야 하지만, flase Return
// 방향 : 2 - 0 -> 2 > k여서 return false지만,  3 - 2 -> 1 = k 도 존재함
// 이에 대한 수정 필요 , set을 활용하는게 더 효율적

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      const prevIndex = seen.get(nums[i]);
      if (i - prevIndex <= k) {
        return true;
      }
    }
    seen.set(nums[i], i);
  }
  return false;
};

// 참고
//Map(); -> Map 객체 생성 , 키-값 요소를 가진, 반복 가능 객체
// 예시
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

//has() -> Map 인스턴스의 주어진 키에 해당하는 요소의 존재 여부를 가리키는 불리언 값을 반환
//get() -> Map 객체에서 특정 요소를 반환
//set() : 이 Map에서 명시진 키와 값을 추가하거나 갱신
