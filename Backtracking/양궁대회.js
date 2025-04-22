// 라이언 vs 어피치 양궁 대회
// 현재 상황(n) : 어피치가 n발 쏜 이후 라이언이 n발 쏨
// 점수(info) :  10,9,8,7,6,5,4,3,2,1,0 점 으로 구성되어있다.

// 어피치 : k점 a발
// 라이언 : k점 b발
// 만약 a < b => 라이언 점수 획득
// 만약 b <= a => 어피치 점수 획득
// (중요! k점을 여러 발 맞춤 k * a 형태가 아닌 k점만을 가져감)

// 만약 a = b = 0 이면 아무도 점수를 얻지 못함

// 모든 과녁 점수 대해 -> 각 선수의 최종 점수를 구함
// 최종 점수가 높음 -> 높은 캐릭터 우승자
// 만약 같다면 -> 어피치 우승자

// return 라이언이 "가장 큰 점수 차이"로 우승하기 위해
//        n발의 화살을 어떤 과녁 점수에 맞혀야 하는지
//        10점부터 0점까지 순서대로 정수 배열

// 만약 어떻게 화살을 쏘든 라이언의 점수가 어피치의 점수보다 낮거나 같으면
// return [-1]

// 라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 여러 가지 일 경우
// return 가장 낮은 점수를 더 많이 맞힌 경우

function solution(n, info) {
  let maxDiff = 0;
  let answer = [-1];

  function calculateScore(lion, apeach) {
    let lionScore = 0,
      apeachScore = 0;
    for (let i = 0; i < 11; i++) {
      if (lion[i] === 0 && apeach[i] === 0) continue;
      if (lion[i] > apeach[i]) lionScore += 10 - i;
      else apeachScore += 10 - i;
    }
    return lionScore - apeachScore;
  }

  function dfs(index, arrows, lion) {
    if (index === 11) {
      if (arrows > 0) lion[10] += arrows; // 남은 화살은 마지막에 몰아주기, 총 n발을 다 써야 하기 때문”
      const diff = calculateScore(lion, info);
      if (diff > maxDiff && diff > 0) {
        maxDiff = diff;
        answer = [...lion];
      } else if (diff === maxDiff && diff > 0) {
        // 더 낮은 점수 많이 맞힌 경우가 우선
        for (let i = 10; i >= 0; i--) {
          if (lion[i] > answer[i]) {
            answer = [...lion];
            break;
          } else if (lion[i] < answer[i]) break;
        }
      }
      if (arrows > 0) lion[10] -= arrows; // 원상 복구
      return;
    }

    // 해당 점수를 가져가기 위해 info[index] + 1발 쏘는 경우, 남은 화살이 충분할 경우
    if (arrows > info[index]) {
      lion[index] = info[index] + 1;
      dfs(index + 1, arrows - lion[index], lion);
      lion[index] = 0;
    }

    // 해당 점수 포기하는 경우
    dfs(index + 1, arrows, lion);
  }

  dfs(0, n, Array(11).fill(0));
  return answer;
}

solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]); //[0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0]

// 어피치 총점 : 20 + 9 + 8 + 7 = 44
