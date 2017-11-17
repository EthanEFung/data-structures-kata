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

function printBSTAscendingly(tree) {
  if (tree.value) {
    const result = [];
    if (tree.left !== null) result.push(printBSTAscendingly(tree.left));
    result.push(tree.value);
    if (tree.right !== null) result.push(printBSTAscendingly(tree.right));
    return result.join(", ");
  }
}

function printBSTDescendingly(tree) {
  if (tree.value) {
    const result = [];
    if (tree.right) result.push(printBSTDescendingly(tree.right));
    result.push(tree.value);
    if (tree.left) result.push(printBSTDescendingly(tree.left));

    return result.join(", ");
  }
}

function lookupBST(x, tree) {
  if (!tree) return false;
  if (tree.value === x) return true;
  if (tree.value > x) return lookupBST(x, tree.left);
  if (tree.value < x) return lookupBST(x, tree.right);
}

function hasSumPath(x, tree) {
  if (!tree) return x === 0;
  if (hasSumPath(x - tree.value, tree.left)) return true;
  if (hasSumPath(x - tree.value, tree.right)) return true;
  return false;
}

module.exports = {
  NonBinaryTree,
  BinaryTree,
  depthTraverseNonBinaryTree,
  breadthTraverseNonBinaryTree,
  depthTraverseBinaryTree,
  breadthTraverseBinaryTree,
  printBSTAscendingly,
  printBSTDescendingly,
  lookupBST,
  hasSumPath
};
