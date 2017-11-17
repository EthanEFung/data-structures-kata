const {
  NonBinaryTree,
  BinaryTree,
  depthTraverseNonBinaryTree
} = require("./trees");

const { TestNBT, TestBT, TestBST } = require("./sampleTrees");

describe("Non-Binary Tree", function() {
  it("should have a value", function() {
    const actual = new NonBinaryTree("Rad");
    expect(actual.value).toEqual("Rad");
  });
  it("should have a children property", function() {
    const actual = new NonBinaryTree("Super");
    expect(actual.children).toBeTruthy();
  });
});

describe("Binary Tree", function() {
  it("should have a value", function() {
    const actual = new BinaryTree("Awesome");
    const expected = { value: "Awesome", left: null, right: null };
    expect(actual).toEqual(expected);
  });
  it("should have a left child attribute", function() {
    const actual = new BinaryTree("BAMF");
    expect(actual.left).toBeNull();
  });
  it("should have a right child attribute", function() {
    const actual = new BinaryTree("BAMF");
    expect(actual.right).toBeNull();
  });
});

describe("depthTraverseNonBinaryTree", function() {
  it("should visit all nodes in a tree", function() {
    const values = [];
    function logValue(tree) {
      values.push(tree.value);
    }
    depthTraverseNonBinaryTree(TestNBT, logValue);
    expect(logValue).toHaveBeenCalledTimes(10);
  });
});
