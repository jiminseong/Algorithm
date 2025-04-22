function handleCheck(arr, f) {
  let checkArr =
    f === 5 ? [1, 2, 3, 4, 5] : f === 8 ? [2, 1, 2, 3, 2, 4, 2, 5] : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === checkArr[i % f]) {
      count += 1;
    }
  }
  return count;
}

function solution(answers) {
  let arr = [handleCheck(answers, 5), handleCheck(answers, 8), handleCheck(answers, 10)];
  let max = Math.max(...arr);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      result.push(i + 1);
    }
  }
  return result;
}

solution([1, 1, 1, 1, 1, 1, 1, 1, 1]);
