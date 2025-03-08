// Given two strings s and t, return true if t is an
// anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// 첫번째 생각 : 순서고려 문자열 변환 -> 정렬 후 비교
// 두번째 생각 : 정렬이 불필요?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort() == t.split("").sort();
};

// 문제 : case 1에서 false
// 이유 : 배열의 비교는 참조값을 비교하기 때문

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
};

// 첫번째 답안 :
// 시간 복잡도 :
// split() -> O(n) -> sort() -> O(nlogn) -> join() -> O(n)
// 공간 복잡도 : O(n)
// O(nlogn)
// 기타 성능 :
// Runtime
// 22 ms / Beats :38.94%
// Analyze Complexity :
// Memory : 54.05MB
// Beats : 37.48%

// 발전 : 문자열 길이 다르면 애초에 false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") == t.split("").sort().join("");
};

// 두번째 답안 답안 :
// 시간 복잡도 : O(n) or O(nlogn) 으로 개선
// 공간 복잡도 : O(1) or O(n) 으로 개선
// O(nlogn)
// 기타 성능 :
// Runtime : 32ms / Beats : 16.79%
// Analyze Complexity :
// Memory : 55.07MB
// Beats :11.03%

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
};

// 위의 방법도 존재 -> 문자 빈도수 비교 방법
