function solution(N, stages) {
  const challenges = Array(N + 1).fill(0);

  // 1. stages를 순회한다.
  stages.forEach((stage) => {
    for (let i = 0; i < stage; i++) {
      // 2. 순회하면서, ex) 2이면 도전배열의 요소 0,1의 1증가한다 이런식으로
      challenges[i] += 1;
    }
  });
  // 3. 도전 배열에는 해당 스테이지에 도전한 인원의 수가 담긴다.
  for (let i = 0; i < challenges.length; i++) {
    if (i === N + 1) break;
    // 4. 그러면 도전[i] - 도전[i+1] / 도전[i] 로 실패율을 구해서 새로운 실패율 배열 혹은 객체를 만든다.
    challenges[i] = [i + 1, (challenges[i] - challenges[i + 1]) / challenges[i]];
  }

  // 5. 실패율에 따라 내림차순으로 정렬해서 스테이지의 넘버를 반환한다.
  challenges.pop();
  challenges.sort((a, b) => b[1] - a[1]);

  return challenges.map((a) => a[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
