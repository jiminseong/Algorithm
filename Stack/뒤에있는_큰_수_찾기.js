function solution(numbers) {
  let result = new Array(numbers.length).fill(-1); // 초기값 -1 설정
  let stack = []; // 인덱스를 저장할 스택

  numbers.forEach((num, index) => {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < num) {
      //stack의 가장 최근 요소(index 값에 해당됨)
      let prevIndex = stack.pop();
      result[prevIndex] = num; // 뒷 큰수 갱신
    }
    stack.push(index); // 현재 인덱스를 스택에 저장
  });

  return result;
}
