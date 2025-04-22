function solution(k, dungeons) {
  let count = 0;

  dungeons.sort((a, b) => {
    return b[0] / b[1] - a[0] / a[1];
  });

  dungeons.forEach((dungeon) => {
    if (k >= dungeon[0] && k >= dungeon[1]) {
      k -= dungeon[1];
      count += 1;
    }
  });

  if (count > 8) return 8;
  return count;
}

solution(8, [
  [8, 1],
  [7, 2],
  [1, 1],
  [3, 2],
  [2, 1],
]);
