function solution(board) {
  const N = board.length;
  const INF = Number.MAX_SAFE_INTEGER;
  const dX = [-1, 1, 0, 0]; // 상, 하, 좌, 우
  const dY = [0, 0, -1, 1]; // 상, 하, 좌, 우

  let cost = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(4).fill(INF)));

  // [x, y, direction, price]
  let queue = [];

  // 시작점에서 오른쪽(3) 혹은 아래(1)로만 이동 가능
  queue.push([0, 0, 1, 0]); // 아래 방향
  queue.push([0, 0, 3, 0]); // 오른쪽 방향

  cost[0][0][1] = 0;
  cost[0][0][3] = 0;

  while (queue.length) {
    let [x, y, direction, price] = queue.shift();

    // 도착 시에 가능한 경로 중 최소 비용 리턴
    if (x === N - 1 && y === N - 1) return Math.min(...cost[N - 1][N - 1]);

    for (let i = 0; i < 4; i++) {
      let nx = x + dX[i];
      let ny = y + dY[i];
      let newPrice = price;

      if (nx < 0 || ny < 0 || nx >= N || ny >= N || board[nx][ny] === 1) continue;

      // 직선이면 100원 추가
      if (i === direction) {
        newPrice += 100;
      }
      // 코너이면 600원 추가 (100 + 500)
      else {
        newPrice += 600;
      }

      // 최소 비용 갱신
      if (newPrice < cost[nx][ny][i]) {
        cost[nx][ny][i] = newPrice;
        queue.push([nx, ny, i, newPrice]);
      }
    }
  }

  return INF;
}
