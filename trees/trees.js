class NonBinaryTree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthTraverseNonBinaryTree(tree, cb) {
  for (let child of tree.children) {
    depthTraverseNonBinaryTree(child, cb);
  }
  cb(tree);
}

function breadthTraverseNonBinaryTree(tree, cb) {
  let queue = [tree];

  while (queue.length > 0) {
    let node = queue.shift();
    queue.push(...node.children);
    cb(node);
  }
}

function depthTraverseBinaryTree(tree, cb, firstChild = "left") {
  let secondChild = firstChild === "left" ? "right" : "left";
  if (tree[firstChild]) {
    depthTraverseBinaryTree(tree[firstChild], cb, firstChild);
  }
  if (tree[secondChild]) {
    depthTraverseBinaryTree(tree[secondChild], cb, firstChild);
  }
  if (!!tree) cb(tree);
}

function breadthTraverseBinaryTree(tree, cb, firstChild = "left") {
  let secondChild = firstChild === "left" ? "right" : "left";
  const queue = [tree];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node[firstChild]) queue.push(node[firstChild]);
    if (node[secondChild]) queue.push(node[secondChild]);
    cb(node);
  }
}

module.exports = {
  NonBinaryTree,
  BinaryTree,
  depthTraverseNonBinaryTree,
  breadthTraverseNonBinaryTree,
  depthTraverseBinaryTree,
  breadthTraverseBinaryTree
};
