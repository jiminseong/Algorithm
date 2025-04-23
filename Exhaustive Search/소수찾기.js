// 소수 찾기

// 순열 구하기
function getAllCombinations(numbers) {
  const result = new Set();

  function recur(current, remaining) {
    if (current.length > 0) {
      result.add(parseInt(current));
    }

    for (let i = 0; i < remaining.length; i++) {
      const nextCurrent = current + remaining[i];
      const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      recur(nextCurrent, nextRemaining);
    }
  }

  recur("", numbers);
  return [...result];
}

//소수 판별 - 2부터 제곱근까지만(가운데 약수까지만) 나누어본다.
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(numbers) {
  const combNums = getAllCombinations(numbers);
  const primeNums = combNums.filter(isPrime);
  return primeNums.length;
}

solution("17");
