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
    // [4, 2]
    const [N, L] = input[0].split(" ").map(Number); //첫째 줄에 물이 새는 곳의 개수 N과 테이프의 길이 L

    // [1, 2, 100, 101]
    const leaksLocations = input[1].split(" ").map(Number); // 물이 새는 곳의 위치
    let length = leaksLocations.length;
    let tapeCount = 0;
    while (length > 0) {
      length -= L;
      tapeCount++;
    }

    console.log(tapeCount); // 테이프 개수 반환
    process.exit();
  });
