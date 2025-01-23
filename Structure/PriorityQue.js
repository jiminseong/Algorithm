function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index })); //priority는 우선순위
  let order = 0; // 실행 순서 나타냄

  while (queue.length > 0) {
    let current = queue.shift(); // 큐에서 첫 번째 프로세스를 꺼냄

    if (queue.some((process) => process.priority > current.priority)) {
      queue.push(current); // 더 높은 우선순위가 있으면 다시 큐에 넣음
    } else {
      order++;
      if (current.index === location) {
        return order; // 실행된 프로세스가 우리가 찾는 위치라면 순서 반환
      }
    }
  }
}
