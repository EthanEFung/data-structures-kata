const {
  NonBinaryTree,
  BinaryTree,
  depthTraverseNonBinaryTree,
  breadthTraverseNonBinaryTree
} = require("./trees");

const { TestNBT, TestBT, TestBST } = require("./sampleTrees");

const logValue = jest.fn().mockImplementation(tree => console.log(tree.value));
const pushValue = jest
  .fn()
  .mockImplementation((values, tree) => values.push(tree.value));
const mockFunctions = [logValue, pushValue];

afterEach(() => {
  mockFunctions.forEach(fn => fn.mockClear());
});

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
    depthTraverseNonBinaryTree(TestNBT, logValue);
    expect(logValue).toHaveBeenCalledTimes(10);
  });

  it("should visit the children prior to the parent", function() {
    const actual = [];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    depthTraverseNonBinaryTree(TestNBT, t => pushValue(actual, t));
    expect(actual).toEqual(expected);
  });
});

describe("breadth first non-binary tree search", function() {
  it("should visit all nodes in the tree", function() {
    breadthTraverseNonBinaryTree(TestNBT, logValue);
    expect(logValue).toHaveBeenCalledTimes(10);
  });
  it("should visit the parent prior to the children", function() {
    const actual = [];
    const expected = [10, 4, 5, 6, 7, 8, 9, 1, 2, 3];

    breadthTraverseNonBinaryTree(TestNBT, t => pushValue(actual, t));
    expect(actual).toEqual(expected);
  });
});
