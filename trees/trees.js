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

module.exports = {
  NonBinaryTree,
  BinaryTree,
  depthTraverseNonBinaryTree
};
