// n명의 사람이 일렬로 줄을 서고 있습니다.
// n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다.
// n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다.
// 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다.

// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]

// 사람의 수 n과, 자연수 k가 주어질 때,
// 사람을 나열 하는 방법을 사전 순으로 나열 했을 때,
// k번째 방법을 return하는 solution 함수를 완성해주세요.

// 제한사항
// n은 20이하의 자연수 입니다.
// k는 n! 이하의 자연수 입니다.
// 입출력 예
// n |	k	| result
// 3 | 	5 | [3,1,2]

// 첫번째 생각 : set으로 키-값으로 넣으면 되지 않을까?
// 두번째 생각 : 그냥 배열로 넣어도 될듯

//힌트 : 결국 정렬 경우의 수는 순열 -> n!를 따르는데
// 세번째 생각 :
// 예를 들어서, 5! 이면 120 / 5 = 24, 즉 앞의자리가 1~5에 따라 각각 24가지씩 존재함, 만약 k가 10이다 그러면 1일때인경우
// 다음으로, 1일때는 나머지가 4! 이면 24 / 4 = 6, 따라서 맨앞의자리가 2일때
// 다음으로, 2일때는 나머지가 3! 이면 6 / 3 = 2, 두가지 따라서 아님
// 따라서 앞자리가 3일때 두번째 경우의수 -> 1,3,2,4,5 -> 답 : 1,3,2,5,4

//힌트 : Array.from으로 숫자 배열 만들기
//힌트 : 첫 번째 자리가 고정되었을 때, 나머지 자리의 경우의 수는 (n-1)!

function solution(n, k) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];
  k -= 1;

  function getFactorial(x) {
    return x != 1 ? x * getFactorial(x - 1) : 1;
  }

  while (numbers.length > 0) {
    const factorial = getFactorial(numbers.length - 1);
    const index = Math.floor(k / factorial);
    result.push(numbers[index]);
    k %= factorial;
  }
  return result;
}

// 문제 :
// #
// # Fatal error in , line 0
// # Fatal JavaScript invalid size error 169220804
// #
// #
// #
// #FailureMessage Object: 0x7ffeabf72d30
//  1: 0xb6ca81  [node]
//  2: 0x1bef1a4 V8_Fatal(char const*, ...) [node]
//  3: 0xe63268  [node]
//  4: 0x1010b12  [node]
//  5: 0x1011456  [node]
//  6: 0x11d1b73 v8::internal::Runtime_GrowArrayElements(int, unsigned long*, v8::internal::Isolate*) [node]
//  7: 0x15d5439  [node]
// 테스트 결과 (~˘▾˘)~
// 1개 중 0개 성공

// 이유 : 메모리 할당과 관련하여 발생하는 문제로, 일반적으로 너무 큰 데이터 구조를 다루거나,
// 무한 루프 및 재귀 함수로 인해 메모리 부족 상황이 발생할 때 나타남
// 방향 : while 제거?
// 힌트 : getFactorial이 재귀적으로 작성되어있어서 발생

function getFactorial(x) {
  let result = 1;
  for (let i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
}

// 위와 같이 수정
// 문제 : 동일문제

function solution(n, k) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];
  k -= 1;

  function getFactorial(x) {
    let result = 1;
    for (let i = 2; i <= x; i++) {
      result *= i;
    }
    return result;
  }

  while (numbers.length > 0) {
    const factorial = getFactorial(numbers.length - 1);
    const index = Math.floor(k / factorial);
    result.push(numbers[index]);
    numbers.splice(index, 1); // 선택된 숫자를 배열에서 제거
    k %= factorial;
  }
  return result;
}

// 시간 복잡도 : O(n^3)
