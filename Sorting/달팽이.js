function generateSnailMatrix(n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));

  const directions = [
    [0, -1], // 상
    [1, 0], // 우
    [0, 1], // 하
    [-1, 0], // 좌
  ];

  let x = Math.floor(n / 2),
    y = Math.floor(n / 2);

  matrix[y][x] = 1;
  let num = 2,
    step = 1;

  while (num <= n * n) {
    for (let d = 0; d < 4; d++) {
      let [dx, dy] = directions[d];

      for (let i = 0; i < step; i++) {
        x += dx;
        y += dy;

        if (x >= 0 && x < n && y >= 0 && y < n) {
          matrix[y][x] = num++;
        }

        if (num > n * n) return matrix;
      }
      if (d % 2 === 1) step++; // 우, 하 이동 후 step 증가
    }
  }

  return matrix;
}

function findPosition(matrix, target) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === target) return [y + 1, x + 1];
    }
  }
  return [-1, -1];
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("", (n) => {
  n = parseInt(n);
  rl.question("", (target) => {
    target = parseInt(target);

    let snailMatrix = generateSnailMatrix(n);
    snailMatrix.forEach((row) => console.log(row.join(" ")));

    let [y, x] = findPosition(snailMatrix, target);
    console.log(y, x);

    rl.close();
  });
});
