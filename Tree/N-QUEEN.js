const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", function (line) {
  const N = Number(line);
  readline.close();
  let result = 0;
  const queensCol = new Array(N).fill(-1); // 각 행에 배치된 퀸의 열 정보를 저장
  // queensCol[2] = 3이면 2번째 행의 3번째 열에 퀸이 배치되었다는 의미.

  function isSafe(row, col) {
    for (let prevRow = 0; prevRow < row; prevRow++) {
      const prevCol = queensCol[prevRow];
      if (prevCol === col || Math.abs(prevCol - col) === Math.abs(prevRow - row)) {
        return false;
      }
    }
    return true;
  }

  function dfs(row) {
    if (row === N) {
      result++;
      return;
    }
    for (let col = 0; col < N; col++) {
      if (isSafe(row, col)) {
        queensCol[row] = col;
        dfs(row + 1);
        queensCol[row] = -1; //백트래킹
      }
    }
  }

  dfs(0);
  console.log(result);
  process.exit();
});
