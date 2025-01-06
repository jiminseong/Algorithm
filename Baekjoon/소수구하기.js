// 문제
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

// 출력
// 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

// 예제 입력 1
// 3 16
// 예제 출력 1
// 3
// 5
// 7
// 11
// 13

// 힌트 : 에라토스테네스의 체 방식 https://namu.wiki/w/에라토스테네스의%20체
// 에라토스테네스의 체는 '특정 범위 내의 소수'를 판정하는 데에만 효율적

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el));
  })
  .on("close", function () {
    const a = input[0];
    const b = input[0];

    process.exit();
  });
