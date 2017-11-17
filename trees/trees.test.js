const {
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
} = require("./trees");
const { TestNBT, TestBT, TestBST } = require("./sampleTrees");

const logValue = jest.fn().mockImplementation(tree => console.log(tree.value));
const pushValue = jest
  .fn()
  .mockImplementation((values, tree) => values.push(tree.value));
const mock = jest.fn().mockImplementation();
const mockFunctions = [logValue, pushValue, mock];

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

describe("Traversing Trees", function() {
  describe("depthTraverseNonBinaryTree", function() {
    it("should visit all nodes in a tree", function() {
      depthTraverseNonBinaryTree(TestNBT, mock);
      expect(mock).toHaveBeenCalledTimes(10);
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
      breadthTraverseNonBinaryTree(TestNBT, mock);
      expect(mock).toHaveBeenCalledTimes(10);
    });
    it("should visit the parent prior to the children", function() {
      const actual = [];
      const expected = [10, 4, 5, 6, 7, 8, 9, 1, 2, 3];

      breadthTraverseNonBinaryTree(TestNBT, t => pushValue(actual, t));
      expect(actual).toEqual(expected);
    });
  });

  describe("depth first binary tree search", function() {
    it("should visit every node", function() {
      depthTraverseBinaryTree(TestBT, mock);
      expect(mock).toHaveBeenCalledTimes(7);
    });
    it("should start with the left side if the firstChild is not specified", function() {
      const actual = [];
      const expected = [8, 5, 7, 3, 2, 5, 1];
      depthTraverseBinaryTree(TestBT, t => pushValue(actual, t));
      expect(actual).toEqual(expected);
    });
    it("should start with the right if specified", function() {
      const actual = [];
      const expected = [2, 3, 5, 5, 8, 7, 1];
      depthTraverseBinaryTree(TestBT, t => pushValue(actual, t), "right");
      expect(actual).toEqual(expected);
    });
  });

  describe("breadth first binary tree search", function() {
    it("should visit every node", function() {
      breadthTraverseBinaryTree(TestBT, mock);
      expect(mock).toHaveBeenCalledTimes(7);
    });
    it("should visit parent nodes prior to children", function() {
      const actual = [];
      const expected = [1, 7, 5, 8, 5, 3, 2];
      breadthTraverseBinaryTree(TestBT, t => pushValue(actual, t));
      expect(actual).toEqual(expected);
    });
    it("should visit right node prior to left if specified", function() {
      const actual = [];
      const expected = [1, 5, 7, 2, 3, 5, 8];
      breadthTraverseBinaryTree(TestBT, t => pushValue(actual, t), "right");
      expect(actual).toEqual(expected);
    });
  });

  describe("Ascend/Descend Binary Search Tree", function() {
    it("should be able to print in ascending order", function() {
      const actual = printBSTAscendingly(TestBST);
      let expected =
        "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, " +
        "11, 12, 13, 14, 15, 16, 17, 18, 19, 20";

      expect(actual).toEqual(expected);
    });

    it("should be able to print in descending order", function() {
      const actual = printBSTDescendingly(TestBST);
      let expected =
        "20, 19, 18, 17, 16, 15, 14, 13, 12, 11, " +
        "10, 9, 8, 7, 6, 5, 4, 3, 2, 1";

      expect(actual).toEqual(expected);
    });
  });
});

describe("Searching Binary Search Trees", function() {
  it("should return true if the BST contains the value", function() {
    const actual = lookupBST(5, TestBST);
    const actual2 = lookupBST(18, TestBST);
    expect(actual).toBeTruthy();
    expect(actual2).toBeTruthy();
  });
  it("should return false if the BST does not contain the value", function() {
    const actual = lookupBST(21, TestBST);
    expect(actual).toBeFalsy();
  });
});

describe("sum path function", function() {
  it("should find the sum path if the path exists", function() {
    const actual = hasSumPath(13, TestBT);
    expect(actual).toBeTruthy();
  });
  it("should return false if the path does not exist", function() {
    const actual = hasSumPath(2, TestBT);
    expect(actual).toBeFalsy();
  });
});
