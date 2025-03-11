function solution(N, stages) {
  // 1.1~stage요소(스테이지넘버)에 해당되는 라운드의 도달한 사람 +1, stage요소(스테이지넘버)에 해당되는 실패한사람 + 1에
  const failRateArray = Array.from({ length: N }, () => [0, 0]);

  stages.forEach((stage) => {
    for (let i = 0; i <= stage; i++) {
      failRateArray[i][0] += 1;
    }
    if (stage <= N) failRateArray[stage - 1][1] += 1;
  });

  console.log(failRateArray);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
