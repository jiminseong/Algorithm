// 1. N%2 를 stack에 push,
// 2. N을 2로 나눔
// 3. 다시 1번 진행
function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  return console.log(stack.reverse().join(""));
}

solution(10);
solution(27);
solution(12345);
