// 1. 초기 설정
//    - 최소 이동 횟수 `move` 를 `name.length - 1` 로 설정 (오른쪽 끝까지 이동하는 경우)
//    - 총 조작 횟수 `answer` 를 0으로 초기화

// 2. 문자열 `name`을 순회하며 각 문자별 조작 횟수 계산
//    - 현재 문자가 'A'에서 몇 번 이동해야 하는지 계산
//      - `위로 이동 횟수 = (현재 문자 - 'A')`
//      - `아래로 이동 횟수 = ('Z' - 현재 문자 + 1)`
//      - `최소값을 선택하여 answer에 추가`

// 3. 좌,우 이동 판단
//    - 현재 위치에서 다음 문자를 확인하여 연속된 'A'가 있는지 찾기
//    - `nextIndex`를 현재 위치 다음으로 설정한 후
//      - 만약 `nextIndex`가 'A'라면, `nextIndex`를 계속 증가시켜 연속된 A의 끝까지 이동
//    - 커서 이동의 최소값을 계산 (현재 이동 방식 중 가장 작은 값 선택)
//      - `오른쪽으로 쭉 이동`
//      - `우-좌-우 방식 (i * 2 + (name.length - nextIndex))`
//      - `좌-우-좌 방식 ((name.length - nextIndex) * 2 + i)`

// 4. 최종적으로 `answer + move`를 반환

function solution(name) {
  let move = name.length - 1;
  let answer = 0;

  [...name].forEach((char, index) => {
    answer += Math.min(
      char.charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() - char.charCodeAt() + 1
    );

    let nextIndex = index + 1;
    while (nextIndex < name.length && name[nextIndex] === "A") {
      nextIndex++;
    }

    move = Math.min(
      move,
      index * 2 + (name.length - nextIndex),
      (name.length - nextIndex) * 2 + index
    );
  });

  return answer + move;
}
