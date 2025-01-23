function solution(jobs) {
  var answer = 0;
  const minHeap = new MinHeap();

  //우선순위 비교 1 : 소요 시간

  //우선순위 비교 2 : 요청 시간

  //우선순위 비교 3 : 작업 번호

  return answer;
}

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);

  const heap = [];
  let currentTime = 0; // 현재 시각
  let totalTurnaroundTime = 0; // 총 반환 시간
  let jobIndex = 0; // 처리해야 할 작업의 인덱스
  const jobCount = jobs.length; // 작업 개수

  while (jobIndex < jobCount || heap.length > 0) {
    // 2. 현재 시각까지 요청된 작업을 힙에 추가
    while (jobIndex < jobCount && jobs[jobIndex][0] <= currentTime) {
      const [requestTime, duration] = jobs[jobIndex];
      heap.push([duration, requestTime]); // 힙에 [소요 시간, 요청 시각] 저장
      jobIndex++;
    }

    // 3. 힙을 소요 시간 기준으로 정렬 (최소 힙)
    heap.sort((a, b) => a[0] - b[0]);

    if (heap.length > 0) {
      // 4. 가장 짧은 작업을 처리
      const [duration, requestTime] = heap.shift();
      currentTime += duration; // 작업 완료 시간
      totalTurnaroundTime += currentTime - requestTime; // 반환 시간 계산
    } else {
      // 5. 힙이 비어 있으면 현재 시각을 다음 작업의 요청 시각으로 이동
      currentTime = jobs[jobIndex][0];
    }
  }

  // 6. 평균 반환 시간 계산 및 정수 부분 반환
  return Math.floor(totalTurnaroundTime / jobCount);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

function solution(jobs) {
  // 1. 요청 시각 기준으로 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  const heap = new MinHeap(); // 최소 힙
  let currentTime = 0;
  let totalTurnaroundTime = 0;
  let jobIndex = 0;

  while (jobIndex < jobs.length || heap.size() > 0) {
    // 2. 현재 시각까지 요청된 작업을 힙에 추가
    while (jobIndex < jobs.length && jobs[jobIndex][0] <= currentTime) {
      heap.insert([jobs[jobIndex][1], jobs[jobIndex][0]]); // [소요 시간, 요청 시각]
      jobIndex++;
    }

    if (heap.size() > 0) {
      // 3. 가장 짧은 작업 처리
      const [duration, requestTime] = heap.remove();
      currentTime += duration;
      totalTurnaroundTime += currentTime - requestTime;
    } else {
      // 4. 힙이 비어 있으면 현재 시각을 다음 작업의 요청 시각으로 이동
      currentTime = jobs[jobIndex][0];
    }
  }

  return Math.floor(totalTurnaroundTime / jobs.length);
}
