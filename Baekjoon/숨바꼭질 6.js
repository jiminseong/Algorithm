// 수빈이는 동생 N명과 숨바꼭질을 하고 있다.
// 수빈이는 현재 점 S에 있고,
// 동생은 A1, A2, ..., AN에 있다.

// 수빈이는 걸어서 이동을 할 수 있다.
// 수빈이의 위치가 X일때 걷는다면 1초 후에 X+D나 X-D로 이동할 수 있다.
// 수빈이의 위치가 동생이 있는 위치와 같으면, 동생을 찾았다고 한다.

// 모든 동생을 찾기위해 D의 값을 정하려고 한다. 가능한 D의 최댓값을 구해보자.

// 첫째 줄에 N(1 ≤ N ≤ 105)과 S(1 ≤ S ≤ 109)가 주어진다.
// 둘째 줄에 동생의 위치 Ai(1 ≤ Ai ≤ 109)가 주어진다.
// 동생의 위치는 모두 다르며, 수빈이의 위치와 같지 않다.

// 가능한 D값의 최댓값을 출력한다.

// 예제 입력
// 3 3
// 1 7 11

// 예제 출력
// 2

//첫번째 생각 : 첫번째 줄은 N과 S 그리고 두번째 줄이 A(1~N) Ai를 나타낸다.

{
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  readline
    .on("line", function (line) {
      input.push(line);
    })
    .on("close", function () {
      const input1 = input[0].split(" ").map((el) => parseInt(el));
      const input2 = input[1].split(" ").map((el) => parseInt(el));

      const N = input1[0];
      const S = input1[1];
      const A = input2;

      process.exit();
    });
}

// 두번째 생각 : 가설 동생들의 위치 중, 수빈이와 가장 작은 거리가 결국 가장 큰 D?

{
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  readline
    .on("line", function (line) {
      input.push(line);
    })
    .on("close", function () {
      const input1 = input[0].split(" ").map((el) => parseInt(el));
      const input2 = input[1].split(" ").map((el) => parseInt(el));

      const N = input1[0];
      const S = input1[1];
      const A = input2;

      var result = [];

      A.forEach((elemnt, index) => {
        result.push(Math.abs(element - S));
      });

      console.log(Math.max(result));
      process.exit();
    });
}

// 힌트 : 수빈이는 D만큼씩 이동이 가능한 것이고 1초에 D, 2초에 2*D만큼씩 이동해서 동생을 모두 찾을 수 있는 D를 구하는 것
// D는 수빈이 위치에서 각 동생들 위치까지의 거리 중 공통된 약수
// -> A[0] - S , A[1] - S, A[2] - S의 최대 공약수

{
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  readline
    .on("line", function (line) {
      input.push(line);
    })
    .on("close", function () {
      const input1 = input[0].split(" ").map((el) => parseInt(el));
      const input2 = input[1].split(" ").map((el) => parseInt(el));

      const N = input1[0];
      const S = input1[1];
      const A = input2;

      // GCD = GreatestCommonDivisor
      function getGCD(x, y) {
        for (i = Math.min(x, y); i >= 0; i--) {
          if (x % i === 0 && y % i === 0) {
            return i;
          }
        }
      }

      const differences = A.map((num) => Math.abs(num - S));

      var result = differences[0];
      for (i = 1; i < differences.length; i++) {
        result = getGCD(result, differences[i]);
      }

      console.log(result);
      process.exit();
    });
}

// 문제 : 시간 초과
// 시간 복잡도 : O(A.length)×O(min(x,y))
// 이유 : for문에서 연산이 많이 반복
// 방향 : 유클리드 호제법 사용
// 참고 : 간단하게 말하면, 유클리드 호제법은 MOD연산(나머지연산)을 반복하면 된다 https://velog.io/@yerin4847/W1-유클리드-호제법

{
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  readline
    .on("line", function (line) {
      input.push(line);
    })
    .on("close", function () {
      const input1 = input[0].split(" ").map((el) => parseInt(el));
      const input2 = input[1].split(" ").map((el) => parseInt(el));

      const N = input1[0];
      const S = input1[1];
      const A = input2;

      // GCD = GreatestCommonDivisor

      function getGCD(x, y) {
        let temp = 0;
        while (y) {
          //y가 0이 될 때까지
          temp = x % y;
          x = y;
          y = temp;
        }
        return x;
      }

      const differences = A.map((num) => Math.abs(num - S));

      var result = differences[0];
      for (i = 1; i < differences.length; i++) {
        result = getGCD(result, differences[i]);
      }

      console.log(result);
      process.exit();
    });
}

//시간 복잡도 : O(A.length×log(max(A[i])))
