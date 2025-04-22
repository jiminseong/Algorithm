// 1. 루트 노드를 찾는 함수
function find(parents, x) {
  if (parents[x] === x) {
    return x;
  }

  parents[x] = find(parents, parents[x]);
  return x;
}
// 2. 두개의 집합을 함치는 함수
function union(parents, x, y) {
  const root1 = find(parents, x);
  const root2 = find(parents, y);

  parents[root2] = root1;
}

function solution(k, operations) {
  // 3. 처음에는 각 노드가 자기 자신을 부모로 가지도록 정의
  const parents = Array.from({ length: k }, (_, i) => i);
  let n = k;

  // 4. 연산을 하나씩 처리
  for (const op of operations) {
    if (op[0] === "u") {
      // 5. union -> 각각 두개의 루트 노트가 속한 집합을 합침
      union(parents, op[1], op[2]);
    } else if (op[0] === "f") {
      // 6. find -> 해당 값이 속한 집합의 루트 노트를 찾음
      find(parents, op[1]);
    }

    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;
  }

  // 7. 모든 노드의 루트 노드를 찾아서 집합의 개수를 계산
  return n;
}
