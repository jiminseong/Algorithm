class TreeNode {
  constructor(value, level) {
    this.value = value;
    this.level = level;
    this.left = null;
    this.right = null;
  }
}

function solution(numbers, target) {
  let count = 0;

  function dfs(node) {
    if (node.level === numbers.length) {
      if (node.value === target) count++;
      return;
    }

    node.left = new TreeNode(node.value - numbers[node.level], node.level + 1);
    node.right = new TreeNode(node.value + numbers[node.level], node.level + 1);

    dfs(node.left);
    dfs(node.right);
  }

  const root = new TreeNode(0, 0);
  dfs(root);

  return count;
}
