// 1. 스택 정의
// 2. 스택에 가운데 , 가운데 + 1, 가운데 - 1, 가운데 +2, 가운데 -2... 이런식으로 m(가운데 index) 까지 진행
// 3. 스택을 그대로 연산 하면 될듯
// 3-1. push 할때 pop
// 3-2. pop한게 연산자라면 이라면 한번더 Pop한 값 * 현재 Push할값 -> 결과값을 Push

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", function (line) {
  const exp = [...line];
  let stack = [];
  const m = Math.floor(exp.length / 2);
  for (let i = 0; i <= m; i++) {
    let backIndex = m + i;
    let frontIndex = m - i;
    if (i === 0) {
      stack.push(exp[m]);
      continue;
    }
    let value = stack.pop();
    let result = value;

    if (exp[backIndex] === "*") {
      result *= Number(exp[frontIndex]);
    }

    if (exp[backIndex] === "+") {
      result += Number(exp[frontIndex]);
    }
    if (exp[backIndex] === "-") {
      result -= Number(exp[frontIndex]);
    }
    if (exp[backIndex] === "/") {
      result /= Number(exp[frontIndex]);
    }
    stack.push(result);
  }
  console.log(stack[0]);
  process.exit();
});
