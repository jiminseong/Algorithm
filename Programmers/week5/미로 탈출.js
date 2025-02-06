function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;

  // 네 방향 (상, 하, 좌, 우)
  const dX = [-1, 1, 0, 0]; // 행 이동
  const dY = [0, 0, -1, 1]; // 열 이동

  function findPosition(target) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (maps[i][j] === target) return [i, j];
      }
    }
    return null;
  }

  function bfs(startX, startY, target) {
    let queue = [[startX, startY, 0]];
    let visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[startX][startY] = true;

    while (queue.length) {
      let [x, y, distance] = queue.shift();

      // 목표 지점 도착하면 거리 반환
      if (maps[x][y] === target) return distance;

      for (let i = 0; i < 4; i++) {
        let nx = x + dX[i];
        let ny = y + dY[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny]) {
          if (maps[nx][ny] !== "X") {
            visited[nx][ny] = true;
            queue.push([nx, ny, distance + 1]);
          }
        }
      }
    }
    return -1;
  }

  let [startX, startY] = findPosition("S");
  let [leverX, leverY] = findPosition("L");

  let startToLever = bfs(startX, startY, "L");
  if (startToLever === -1) return -1; // 레버까지 못 가면 탈출 불가능

  // 3. "L" → "E"까지 BFS 실행
  let leverToExit = bfs(leverX, leverY, "E");
  if (leverToExit === -1) return -1; // 출구까지 못 가면 탈출 불가능

  // 4. 최종 거리 반환
  return startToLever + leverToExit;
}
