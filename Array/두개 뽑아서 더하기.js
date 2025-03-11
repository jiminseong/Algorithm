function solution(numbers) {
  const newNumbers = new Array();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      newNumbers.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(newNumbers)];
  answer.sort((a, b) => a - b);
  return answer;
}

solution([2, 1, 3, 4, 1]);
