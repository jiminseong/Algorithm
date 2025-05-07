// 구명 보트

function solution(people, limit) {
  // 횟수 저장 변수 정의
  let count = 0;
  // 내림 차순 정렬
  people.sort((a, b) => b - a);

  function findHuman(weight, leftPeople) {
    //현재 보트에서 태운 몸무게 제외하고 가능한 몸무게 left
    let left = limit - weight;

    //남은 인원들을 (큰 순서로 정렬된) 돌면서 만약 left안에 들어오면 그 값의 인덱스를 리턴
    for (let i = 0; i < leftPeople.length; i++) {
      if (leftPeople[i] <= left) {
        return i;
      }
    }
    return -1;
  }

  while (people.length > 0) {
    let i = 0;
    //1명만 태움
    count += 1;
    let ridedHuman = people[0];
    people.splice(i, 1);
    let j = findHuman(ridedHuman, people);
    // j가 있다 -> 해당 사람까지 태움
    if (j !== -1) people.splice(j, 1);
  }

  return count;
}

solution([70, 50, 80, 50], 100);
