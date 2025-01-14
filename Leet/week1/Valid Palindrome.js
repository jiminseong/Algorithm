// A phrase is a palindrome if,
// after converting all uppercase letters
// into lowercase letters
// and removing all non-alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true
// if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// 첫번째 생각 : 특수문자를 제외 하는 정규식 필요, " " 일때 무조건 true
// 두번째 생각 : 배열로 만든다음, 양끝에서 비교 시작해서 만약 다른게 나오면 return false, 나오도록
// 세번째 생각 : 대소문자 고려, 모두 소문자로 비교하면 될듯

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");

  return strArray.some(function (x) {
    if (strArray.indexOf(x) !== strArray.lastIndexOf(x)) {
      return false;
    }
  });

  return true;
};

// 문제 : 모든상황에서 false리턴
// 이유 : 생각해보니 indexOf는 index를 반환하는것
// 방향 : 정확한 비교 필요

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");
  const middleIndex = strArray.length / 2;
  return strArray.some(function (x) {
    var firstIndex = strArray.indexOf(x);
    var lastIndex = strArray.lastIndexOf(x);
    if ((lastIndex - firstIndex) / 2 !== middleIndex) {
      return false;
    }
    return true;
  });
};
// after converting all uppercase letters
// into lowercase letters
// and removing all non-alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true
// if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// 첫번째 생각 : 특수문자를 제외 하는 정규식 필요, " " 일때 무조건 true
// 두번째 생각 : 배열로 만든다음, 양끝에서 비교 시작해서 만약 다른게 나오면 return false, 나오도록
// 세번째 생각 : 대소문자 고려, 모두 소문자로 비교하면 될듯

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");

  return strArray.some(function (x) {
    if (strArray.indexOf(x) !== strArray.lastIndexOf(x)) {
      return false;
    }
  });

  return true;
};

// 문제 : 모든상황에서 false리턴
// 이유 : 생각해보니 indexOf는 index를 반환하는것
// 방향 : 정확한 비교 필요

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");
  const middleIndex = strArray.length / 2;
  return strArray.some(function (x) {
    var firstIndex = strArray.indexOf(x);
    var lastIndex = strArray.lastIndexOf(x);
    if ((lastIndex - firstIndex) / 2 !== middleIndex) {
      return false;
    }
    return true;
  });
};

// 문제 :  return false
// 이유 : 아무래도 middleIndex가 21/2 = 10.5 이렇게 나와서
// 방향 : index값으로 비교 말고 바로 값으로 비교하면 될듯함

// A phrase is a palindrome if,
// after converting all uppercase letters
// into lowercase letters
// and removing all non-alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true
// if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// 첫번째 생각 : 특수문자를 제외 하는 정규식 필요, " " 일때 무조건 true
// 두번째 생각 : 배열로 만든다음, 양끝에서 비교 시작해서 만약 다른게 나오면 return false, 나오도록
// 세번째 생각 : 대소문자 고려, 모두 소문자로 비교하면 될듯

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");

  return strArray.some(function (x) {
    if (strArray.indexOf(x) !== strArray.lastIndexOf(x)) {
      return false;
    }
  });

  return true;
};

// 문제 : 모든상황에서 false리턴
// 이유 : 생각해보니 indexOf는 index를 반환하는것
// 방향 : 정확한 비교 필요

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");
  const middleIndex = strArray.length / 2;
  return strArray.some(function (x) {
    var firstIndex = strArray.indexOf(x);
    var lastIndex = strArray.lastIndexOf(x);
    if ((lastIndex - firstIndex) / 2 !== middleIndex) {
      return false;
    }
    return true;
  });
};
// after converting all uppercase letters
// into lowercase letters
// and removing all non-alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true
// if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// 첫번째 생각 : 특수문자를 제외 하는 정규식 필요, " " 일때 무조건 true
// 두번째 생각 : 배열로 만든다음, 양끝에서 비교 시작해서 만약 다른게 나오면 return false, 나오도록
// 세번째 생각 : 대소문자 고려, 모두 소문자로 비교하면 될듯

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");

  return strArray.some(function (x) {
    if (strArray.indexOf(x) !== strArray.lastIndexOf(x)) {
      return false;
    }
  });

  return true;
};

// 문제 : 모든상황에서 false리턴
// 이유 : 생각해보니 indexOf는 index를 반환하는것
// 방향 : 정확한 비교 필요

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");
  const middleIndex = strArray.length / 2;
  return strArray.some(function (x) {
    var firstIndex = strArray.indexOf(x);
    var lastIndex = strArray.lastIndexOf(x);
    if ((lastIndex - firstIndex) / 2 !== middleIndex) {
      return false;
    }
    return true;
  });
};

// 문제 :  return false
// 이유 : 아무래도 middleIndex가 21/2 = 10.5 이렇게 나와서
// 방향 : index값으로 비교 말고 바로 값으로 비교하면 될듯함

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  const str = s.replace(reg, "").toLowerCase();
  const strArray = str.split("");
  if (strArray.length <= 1) return true;

  for (let i = 0; i <= strArray.length / 2; i++) {
    if (strArray[i] !== strArray[strArray.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
