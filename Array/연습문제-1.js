// 혹은, 모든 합 / N*2
function sumOverallColor(arr, n) {
  const sum = arr.reduce((a, b) => {
    return a + b;
  });
  return sum / (n * 2);
}

// 과반수 차지 하는 색
function solution(n, colors) {
  const colorsArr = colors.flat();
  const countArr = new Array(Math.max(...colorsArr) + 1).fill(0);
  let color = null;

  for (let i = 0; i < colorsArr.length; i++) {
    countArr[colorsArr[i]] += 1;
  }

  const max = Math.max(...countArr);
  color = max > colorsArr.length / 2 ? countArr.indexOf(max) : null;
  return color !== null ? color : sumOverallColor(colorsArr, n);
}
