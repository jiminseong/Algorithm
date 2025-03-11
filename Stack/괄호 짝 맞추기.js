// 1. 스택 정의
// 2. s를 배열로 재선언
// 3. s를 돌면서
// 3-1. 길이가 0이 아니라면 pop
// 3-2. pop하고 현재 넣어야할 요소랑 짝이 맞는다면 즉 !== 이라면 pop만 진행
// 3-3. === 이라면 pop한것 다시 넣고, push해야할 것도 다시 push
// 3번 과정을 반복후
// 4. 스택에 요소가 남아있으면 false

function solution(s) {
  const stack = [];

  [...s].forEach((element) => {
    if (stack.length === 0) {
      stack.push(element);
      return;
    }

    let popValue = stack.pop();
    if (popValue === element) {
      stack.push(popValue);
      stack.push(element);
      return;
    }
  });

  if (stack.length > 0) return console.log(false);
  return console.log(true);
}

solution("(())()");
solution("((())()");
