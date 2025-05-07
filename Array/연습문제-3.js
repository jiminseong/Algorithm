function handleCheck(arr1, arr2, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i] !== 0 && arr2[j] !== 0) return true;
    }
  }
  return false;
}

function solution(n, hints) {
  const aArray = new Array(n).fill(0);
  const bArray = new Array(n).fill(0);
  let count = 0;

  for (let i = 0; i < hints.length; i++) {
    const [a, b] = hints[i];
    aArray[a - 1] = 1;
    bArray[b - 1] = 1;
    count += 1;

    if (handleCheck(aArray, bArray, n)) {
      console.log(count + 1);
      return count;
    }
  }

  console.log((n * (n - 1)) / 2);
  return (n * (n - 1)) / 2;
}

solution(4, [
  [1, 3],
  [2, 4],
  [1, 2],
  [3, 4],
  [2, 3],
]); // 3

// solution(3, [
//   [1, 2],
//   [1, 3],
//   [3, 2],
// ]);
// //2

// solution(4, [
//   [2, 1],
//   [1, 3],
//   [2, 3],
//   [2, 4],
//   [4, 3],
//   [4, 1],
// ]);
// //6
