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
