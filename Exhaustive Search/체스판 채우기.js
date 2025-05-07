const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    const [N, M] = input[0].split(" ").map(Number);
    const board = input.slice(1, N + 1).map((row) => row.split(""));

    let minRepaint = Infinity;

    for (let i = 0; i <= N - 8; i++) {
      for (let j = 0; j <= M - 8; j++) {
        let repaintW = 0; // 왼쪽 위가 'W'로 시작
        let repaintB = 0; // 왼쪽 위가 'B'로 시작

        for (let x = 0; x < 8; x++) {
          for (let y = 0; y < 8; y++) {
            const current = board[i + x][j + y];
            const shouldBeW = (x + y) % 2 === 0 ? "W" : "B";
            const shouldBeB = (x + y) % 2 === 0 ? "B" : "W";

            if (current !== shouldBeW) repaintW++;
            if (current !== shouldBeB) repaintB++;
          }
        }

        minRepaint = Math.min(minRepaint, repaintW, repaintB);
      }
    }

    console.log(minRepaint);
    process.exit();
  });
