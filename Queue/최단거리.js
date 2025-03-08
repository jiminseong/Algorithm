function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;

  // 네 방향 (상, 하, 좌, 우)
  const dX = [-1, 1, 0, 0]; // 행 이동
  const dY = [0, 0, -1, 1]; // 열 이동 (수정: 원래 코드에서 우측 방향이 중복됨)

  let queue = [[0, 0, 1]];
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    let [x, y, distance] = queue.shift();

    // 목표 도착 시
    if (x === n - 1 && y === m - 1) return distance;

    for (let i = 0; i < 4; i++) {
      let nx = x + dX[i];
      let ny = y + dY[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }
  return -1;
}
