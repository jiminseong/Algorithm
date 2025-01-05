//두 개의 자연수를
//입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

// 첫째 줄에는 두 개의 자연수가 주어진다.
// 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

// 첫째 줄에는 입력으로 주어진 두 수의 최대공약수를,
// 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

// 예제 입력
// 24 18
// 예제 출력
// 6
// 72

{
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
      const b = input[1];
      process.exit();
    });
}
//첫번째 생각 : 일단 각각 약수의 배열을 만들자
//두번째 생각 : 2부터 둘중의 작은수까지 나머지가 0이될때 최대 공약수
//세번째 생각 : 최소공배수를 1부터 증가시켜서 나머지값이 0 인지 비교
{
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
      const b = input[1];
      // GCD = GreatestCommonDivisor
      function getGCD(x, y) {
        for (i = 2; i <= Math.min(x, y); i++) {
          if (x % i === 0 && y % i === 0) {
            return i;
          }
        }
      }

      // LCM = LeastCommonMultiple
      function getLCM(x, y) {
        var lcm = 0;
        while (true) {
          if (lcm % x === 0 && lcm % y === 0) {
            break;
          }
          lcm++;
        }
        return lcm;
      }

      console.log(`${getGCD(a, b)} \n ${getLCM(a, b)}`);

      process.exit();
    });
}

// 문제 : 틀림
// 이유 : getGCD는 최대공약수를 찾는 문제 , getLCM 무한루프
// 방향 : LCM = (x * y)/gcd 방법으로 찾으면 됨

{
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
      const b = input[1];

      // GCD = GreatestCommonDivisor
      function getGCD(x, y) {
        for (i = Math.min(x, y); i >= 0; i--) {
          if (x % i === 0 && y % i === 0) {
            return i;
          }
        }
      }

      // LCM = LeastCommonMultiple
      function getLCM(x, y) {
        return (x * y) / getGCD(x, y);
      }

      console.log(`${getGCD(a, b)}`, "\n", `${getLCM(a, b)}`);

      process.exit();
    });
}

// 문제 : 출력 형식 잘못
// 이유 : \n 두번필요
console.log(getGCD(a, b)); // 최대공약수 출력
console.log(getLCM(a, b)); // 최소공배수 출력
// 로 수정

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
    const b = input[1];

    // GCD = GreatestCommonDivisor
    function getGCD(x, y) {
      for (i = Math.min(x, y); i >= 0; i--) {
        if (x % i === 0 && y % i === 0) {
          return i;
        }
      }
    }

    // LCM = LeastCommonMultiple
    function getLCM(x, y) {
      return (x * y) / getGCD(x, y);
    }

    console.log(getGCD(a, b));
    console.log(getLCM(a, b));

    process.exit();
  });

// 시간 복잡도 : O(min(x, y))
