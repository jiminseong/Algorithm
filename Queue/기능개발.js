// 1. queue를 정의
// 2. progress를 돌면서 100 - 요소 값에서 , speed의 같은 인덱스 값으로 나눠줌
// 2-1. 그렇게 되면, 배포가능한 최소 날짜가 나오고
// 3. 그 날짜를 큐에 하나씩 담음

function solution(progresses, speeds) {
  let queue = [];
  let arr = [];
  arr[0] = 1;

  progresses.forEach((element, index) => {
    const depolyDate = Math.floor((100 - element) / speeds[index]);
    if (queue.length === 0) {
      queue.push(depolyDate);
      return;
    }
  });

  console.log(queue);

  queue.forEach((element, index) => {
    if (element < queue[index + 1]) {
      arr.push(1);
      return;
    }
    if (queue[index - 1] >= element) {
      arr[index - 1] += 1;
      return;
    }
  });

  return arr;
}
