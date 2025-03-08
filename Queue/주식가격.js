function solution(prices) {
  const n = prices.length;
  const result = new Array(n).fill(0);
  const stack = []; // 스택에는 인덱스를 저장

  for (let i = 0; i < n; i++) {
    // 현재 가격이 이전 가격보다 낮아지는 경우 스택 처리
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  // 스택에 남아 있는 인덱스 처리 (끝까지 가격이 떨어지지 않은 경우)
  while (stack.length > 0) {
    const idx = stack.pop();
    result[idx] = n - idx - 1;
  }

  return result;
}

function solution(prices) {
  const result = Array(prices.length).fill(0);
  const stack = [];

  prices.forEach((price, index) => {
    // 현재 가격이 이전 스택의 가격보다 작으면, 가격이 떨어진 경우를 처리
    while (stack.length > 0 && prices[stack[stack.length - 1]] > price) {
      const top = stack.pop();
      result[top] = index - top; // 떨어지기 전까지의 시간 계산
    }
    stack.push(index); // 현재 인덱스를 스택에 추가
  });

  // 스택에 남은 인덱스 처리 (끝까지 떨어지지 않은 경우)
  while (stack.length > 0) {
    const top = stack.pop();
    result[top] = prices.length - 1 - top; // 남은 기간 계산
  }

  return result;
}
