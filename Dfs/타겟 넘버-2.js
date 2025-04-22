function solution(numbres, target) {
  let count = 0;

  function dfs(index, sum) {
    if (index === numbres.length) {
      if (sum === target) count++;
      return;
    }

    dfs(index + 1, sum + numbres[index]);
    dfs(index + 1, sum - numbres[index]);
  }

  dfs(0, 0);
  return count;
}

solution([1, 1, 1, 1, 1], 3);
// 2. vistied 정의
// 3. 음수일때 부터 시작, 양수 일때 부터 시작으로 나눠서 시작
// 4. bfs 종료 조건
// 	- 만약 target과 같아지면 종료 count 1 증가
// 	- 좌표값이 [0][numbers.length-1] [1][numbers.length-1]이면 끝이기에 종료
// 	- 좌표값이
