class DisjointSet {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootY] = rootX;
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

function solution(n, costs) {
  const islands = new DisjointSet(n);
  let totalCost = 0;
  costs.sort((a, b) => a[2] - b[2]);

  for (const [startIsalnd, endIsalnd, cost] of costs) {
    if (!islands.connected(startIsalnd, endIsalnd)) {
      islands.union(startIsalnd, endIsalnd);
      totalCost += cost;
    }
  }

  return totalCost;
}
