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
    const [N, M] = input[0].split(" ").map(Number); // 첫 번째 줄에서 세로(N)와 가로(M) 크기 추출
    const cheese = input.slice(1).map((line) => line.split(" ").map(Number)); // 나머지 줄에서 치즈 배열 생성

    const directions = [
      [-1, 0], // 위
      [1, 0], // 아래
      [0, -1], // 왼쪽
      [0, 1], // 오른쪽
    ];

    // 좌표가 유효한지 확인하는 함수
    const isInBounds = (x, y) => x >= 0 && x < N && y >= 0 && y < M;

    // 외부 공기를 찾는 함수
    const markExternalAir = () => {
      const queue = [[0, 0]]; // (0, 0)부터 시작
      const visited = Array.from({ length: N }, () => Array(M).fill(false));
      visited[0][0] = true;

      while (queue.length > 0) {
        const [x, y] = queue.shift();
        cheese[x][y] = -1; // 외부 공기를 -1로 표시

        for (const [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;
          if (isInBounds(nx, ny) && !visited[nx][ny] && cheese[nx][ny] <= 0) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    };

    // 치즈를 녹이는 함수
    const meltCheese = () => {
      const toMelt = [];
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (cheese[i][j] === 1) {
            let adjacentAir = 0;
            for (const [dx, dy] of directions) {
              const nx = i + dx;
              const ny = j + dy;
              if (isInBounds(nx, ny) && cheese[nx][ny] === -1) {
                adjacentAir++;
              }
            }
            if (adjacentAir > 0) {
              toMelt.push([i, j]);
            }
          }
        }
      }
      toMelt.forEach(([x, y]) => {
        cheese[x][y] = 0;
      });
      return toMelt.length;
    };

    let time = 0; // 경과 시간
    let lastCheeseCount = 0; // 마지막으로 녹은 치즈 조각의 개수

    // 치즈가 모두 녹을 때까지 반복
    while (true) {
      markExternalAir(); // 외부 공기 표시
      const melted = meltCheese(); // 녹은 치즈의 개수
      if (melted === 0) break; // 더 이상 녹을 치즈가 없으면 종료
      lastCheeseCount = melted;
      time++;

      // 외부 공기 영역을 초기화
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (cheese[i][j] === -1) cheese[i][j] = 0;
        }
      }
    }

    console.log(time); // 치즈가 모두 녹을 때까지의 시간 출력
    console.log(lastCheeseCount); // 마지막으로 녹은 치즈 조각의 개수 출력
  });
