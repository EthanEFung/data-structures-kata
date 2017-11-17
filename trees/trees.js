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

module.exports = {
  NonBinaryTree,
  BinaryTree,
  depthTraverseNonBinaryTree,
  breadthTraverseNonBinaryTree
};
