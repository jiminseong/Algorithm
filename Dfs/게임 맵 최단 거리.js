function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;

  const dX = [-1, 1, 0, 0];
  const dY = [0, 0, -1, 1];

  let queue = [[0, 0, 1]]; // x , y , distance
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      console.log(distance);
      return distance;
    }

    for (let i = 0; i < 4; i++) {
      let nX = x + dX[i];
      let nY = y + dY[i];

      if (
        nX >= 0 &&
        nY >= 0 &&
        nX <= n - 1 &&
        nY <= m - 1 &&
        maps[nX][nY] === 1 &&
        visited[nX][nY] === false
      ) {
        visited[nX][nY] = true;
        queue.push([nX, nY, distance + 1]);
      }
    }
  }
  return -1;
}
