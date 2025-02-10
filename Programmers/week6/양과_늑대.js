class Graph {
  constructor() {
    this.graph = {};
  }

  addVertex(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.graph[vertex1]) this.addVertex(vertex1);
    if (!this.graph[vertex2]) this.addVertex(vertex2);
    this.graph[vertex1].push(vertex2);
    this.graph[vertex2].push(vertex1);
  }

  // DFS 탐색 (재귀 방식)
  dfs(sheepCount = 0, wolfCount = 0, start, visited = new Set(), info) {
    if (wolfCount >= sheepCount) return sheepCount; //늑대가 양보다 많거나 같으면 종료

    if (info[start] === 0) sheepCount += 1;
    if (info[start] === 1) wolfCount += 1;

    visited.add(start); // 방문한 정점 기록
    let maxSheepCount = sheepCount;

    // 현재 정점과 연결된 모든 정점 방문 (재귀 호출)
    for (let neighborVertex of this.graph[start]) {
      if (!visited.has(neighborVertex)) {
        // 아직 방문하지 않았다면 최대값은
        maxSheepCount = Math.max(
          maxSheepCount, // 현재 최대값
          this.dfs(sheepCount, wolfCount, neighborVertex, new Set(visited), info) // 혹은 재귀적으로 방문 이후
        );
      }
    }
    return maxSheepCount;
  }
}

function solution(info, edges) {
  const graph = new Graph();

  info.forEach((_, i) => {
    graph.addVertex(i);
  });

  edges.forEach((edge) => {
    const vertex1 = edge[0];
    const vertex2 = edge[1];
    graph.addEdge(vertex1, vertex2);
  });

  return graph.dfs(0, 0, 0, new Set(), info);
}

/////////////////////////////////////////////////////////////////////////////

function solution(info, edges) {
  //그래프 정의
  const graph = {};
  edges.forEach(([parent, child]) => {
    if (!graph[parent]) graph[parent] = [];
    graph[parent].push(child);
  });

  //최대양개수 정의
  let maxSheep = 0;

  //DFS 정의
  function dfs(sheep, wolf, visited) {
    if (wolf >= sheep) return; //더크면 종료
    maxSheep = Math.max(maxSheep, sheep);

    for (let i = 0; i < visited.length; i++) {
      let vertex = visited[i];

      if (!graph[vertex]) continue; //자식없으면 패스

      for (let child of graph[vertex]) {
        //방문하지 않았다면
        if (!visited.includes(child)) {
          let newSheep = sheep + (info[child] === 0 ? 1 : 0);
          let newWolf = wolf + (info[child] === 1 ? 1 : 0);

          dfs(newSheep, newWolf, [...visited, child]); //재귀
        }
      }
    }
  }

  dfs(1, 0, [0]);

  return maxSheep;
}

////////////////////////////////////////////////////////

function solution(info, edges) {
  // 그래프 생성
  const graph = {};
  edges.forEach(([parent, child]) => {
    if (!graph[parent]) graph[parent] = [];
    graph[parent].push(child);
  });

  let maxSheep = 0; // 최대 양 개수 저장

  function dfs(sheep, wolf, visitedSet) {
    if (wolf >= sheep) return; // 늑대가 양 이상이면 종료
    maxSheep = Math.max(maxSheep, sheep); // 최대값 갱신

    for (let node of visitedSet) {
      if (!graph[node]) continue; // 자식이 없으면 패스

      for (let child of graph[node]) {
        if (!visitedSet.has(child)) {
          // 방문한 적 없는 노드만 추가
          visitedSet.add(child);
          dfs(sheep + (info[child] === 0 ? 1 : 0), wolf + (info[child] === 1 ? 1 : 0), visitedSet);
          visitedSet.delete(child); // 백트래킹 (원상 복구)
        }
      }
    }
  }

  dfs(1, 0, new Set([0])); // 루트 노드에서 시작

  return maxSheep;
}
