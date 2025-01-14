// You are given an array prices where prices[i]
// is the price of a given stock on the ith day.

// You want to maximize your profit
// by choosing a single day
// to buy one stock
// and choosing a different day
// in the future to sell that stock.

// Return the maximum profit
// you can achieve from this transaction.
//  If you cannot achieve any profit,
//  return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1)
// and sell on day 5 (price = 6),
// profit = 6-1 = 5.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {};

//첫번째 생각 : 가장 큰거, 가장 작은거 찾아 -> 대신 가장 작은 것으 index가 더 작아야함
//두번째 생각 : 내림차순 정렬시 -> 기존과 동일 return 0;

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var pricesOrigin = prices;
  prices.sort(function (a, b) {
    return b - a;
  });
  if (pricesOrigin === prices) return 0;
};

//세번째 생각 : 처음 부터 출발 -> 다음게 나보다 크면 빼봐, -> 아닌듯
//네번째 생각 : i,j를 두고 pricesOrigin, prices를 돌리면서 비교해보자
//다섯번째 생각 : 차를 다구해서 비교 , but 뒤쪽으로만 비교 가능하도록

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var result = [];
  var pricesOrigin = prices;
  prices.sort(function (a, b) {
    return b - a;
  });
  if (pricesOrigin === prices) return 0;

  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; i++) {
      if (prices[j] > prices[i]) result.push(prices[j] - prices[i]);
    }
  }

  return Math.max(result);
};

// 문제 : 0 리턴
// 이유 : 배열 비교가 초기에 잘못됨
// 방향 : 먼저 비교 삭제 -> 생각해보니 같지 않은 경우 불필요 연산

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var result = [];

  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; i++) {
      if (prices[j] > prices[i]) result.push(prices[j] - prices[i]);
    }
  }

  return Math.max(result);
};

// 문제 : 시간 초과
// 이유 : for문의 오타

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var result = [];

  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) result.push(prices[j] - prices[i]);
    }
  }

  return Math.max(result);
};

// 문제 : return NaN 발생
// 이유 : Math.max는 배열을 직접 처리하지 못함,
// -> 대신 Math.max(...result)와 같이 스프레드 연산자를 사용해야 배열 내 최대값을 계산

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var result = [];

  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) result.push(prices[j] - prices[i]);
    }
  }

  return Math.max(...result);
};

// Line 34 in solution.js
//              throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type integer");
//              ^
// TypeError: -Infinity is not valid value for the expected return type integer

//문제 : 위의 에러 발생
//이유 : 리턴 타입이 정수가 아니기 때문에 발생
//방향 : 이제 return 0 처리;

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var result = [];

  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) result.push(prices[j] - prices[i]);
    }
  }

  if (result.length > 0) {
    return Number(Math.max(...result));
  }
  return 0;
};

// 문제 : <--- Last few GCs --->
// [22:0x667abb0]     2311 ms: Mark-Compact (reduce) 389.7 (398.0) -> 389.7 (391.0) MB, 35.65 / 0.00 ms  (average mu = 0.816, current mu = 0.220) last resort; GC in old space requested
// [22:0x667abb0]     2348 ms: Mark-Compact (reduce) 389.7 (391.0) -> 389.7 (391.0) MB, 36.84 / 0.00 ms  (average mu = 0.722, current mu = 0.000) last resort; GC in old space requested
// <--- JS stacktrace --->
// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
//  1: 0xc9e850 node::Abort() [nodejs run]
//  2: 0xb720ff  [nodejs run]

// 이유 : 시간복잡도 O(n^2)으로 문제 메모리 초과
// 방향 : 이중 for문 제거, 초기 최대 이익 0으로 설정 갱신하도록

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var result = 0;
  var minPrice = Infinity;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      result = Math.max(result, price - minPrice);
    }
  }
  return result;
};

// 참고 사항 :

// for (let price of prices) {
// ES6(ECMAScript 2015)에서 도입된 for...of 문법

for (let element of iterable) {
  // 반복할 코드
}
// element: iterable 객체의 각 요소를 순차적으로 담는 변수.
// iterable: 배열, 문자열, Map, Set 등 반복 가능한 객체.
// forEach랑 유사한듯

// 참고 사항2 forEach와 차이점 :
// for...of:
// 반복 가능한 객체(iterable)에서 사용됩니다.
// 배열, 문자열, Set, Map 같은 iterable 객체를 순회합니다.
// 일반 객체(Object)에는 사용할 수 없습니다.

// forEach:
// 배열(Array)에서만 사용할 수 있습니다.
// forEach는 배열의 메서드이기 때문에, 다른 iterable 객체(예: 문자열, Set, Map)에서는 사용할 수 없습니다.
// 일반 객체(Object)에는 사용할 수 없습니다.
