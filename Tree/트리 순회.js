class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.nodes = {}; // 노드 저장소 (key: 값, value: TreeNode)
  }

  insertNode(parent, left, right) {
    if (!this.nodes[parent]) this.nodes[parent] = new TreeNode(parent);
    const parentNode = this.nodes[parent];

    if (left !== ".") {
      this.nodes[left] = new TreeNode(left);
      parentNode.left = this.nodes[left];
    }

    if (right !== ".") {
      this.nodes[right] = new TreeNode(right);
      parentNode.right = this.nodes[right];
    }
  }

  // 전위 순회 (Preorder)
  preOrder(node, result = []) {
    if (!node) return;
    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  // 중위 순회 (Inorder)
  inOrder(node, result = []) {
    if (!node) return;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }

  // 후위 순회 (Postorder)
  postOrder(node, result = []) {
    if (!node) return;
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.value);
    return result;
  }
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    const N = parseInt(input[0]);
    const nodeList = input.slice(1, N + 1).map((line) => line.split(" "));
    const tree = new BinaryTree();

    for (const [parent, left, right] of nodeList) {
      tree.insertNode(parent, left, right);
    }

    const root = tree.nodes["A"];

    console.log(
      tree.preOrder(root).join("") +
        "\n" +
        tree.inOrder(root).join("") +
        "\n" +
        tree.postOrder(root).join("")
    );

    process.exit();
  });
