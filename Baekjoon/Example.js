// 한줄,불규칙 입력 받을때에
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
      /*
  솔루션 작성
*/
      process.exit();
    });
}

// 특정 줄 갯수를 입력 받을 때에
{
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  readline
    .on("line", function (line) {
      input.push(line); // 한 줄씩 입력을 배열에 저장
    })
    .on("close", function () {
      const input1 = input[0].split(" ").map((el) => parseInt(el)); // 첫 번째 줄
      const input2 = input[1].split(" ").map((el) => parseInt(el)); // 두 번째 줄

      process.exit();
    });
}
