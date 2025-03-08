const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sdoku = [];

readline
  .on("line", (line) => {
    sdoku.push(line.split(" ").map(Number));
  })
  .on("close", () => {
    // 방문 체크 배열
    const visitedRow = Array.from({ length: 9 }, () => Array(9).fill(false));
    const visitedCol = Array.from({ length: 9 }, () => Array(9).fill(false));
    const visitedBox = Array.from({ length: 9 }, () => Array(9).fill(false));

    // 박스 번호 계산 함수
    const boxIndex = (i, j) => Math.floor(i / 3) * 3 + Math.floor(j / 3);

    // 초기 방문 배열 설정
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sdoku[i][j] !== 0) {
          let num = sdoku[i][j] - 1;
          visitedRow[i][num] = true;
          visitedCol[j][num] = true;
          visitedBox[boxIndex(i, j)][num] = true;
        }
      }
    }

    // 백트래킹 함수
    function backTracking(i, j) {
      if (i === 9) {
        // 스도쿠 판 출력 후 종료
        console.log(sdoku.map((row) => row.join(" ")).join("\n"));
        process.exit();
      }

      // 이미 채워져 있는 칸이면 다음 칸으로 이동
      if (sdoku[i][j] !== 0) {
        backTracking(i + Math.floor((j + 1) / 9), (j + 1) % 9);
        return;
      }

      for (let k = 0; k < 9; k++) {
        if (visitedRow[i][k] || visitedCol[j][k] || visitedBox[boxIndex(i, j)][k]) continue;

        // 숫자 배치
        sdoku[i][j] = k + 1;
        visitedRow[i][k] = true;
        visitedCol[j][k] = true;
        visitedBox[boxIndex(i, j)][k] = true;

        backTracking(i + Math.floor((j + 1) / 9), (j + 1) % 9);

        // 백트래킹 (되돌리기)
        sdoku[i][j] = 0;
        visitedRow[i][k] = false;
        visitedCol[j][k] = false;
        visitedBox[boxIndex(i, j)][k] = false;
      }
    }

    backTracking(0, 0);
  });
