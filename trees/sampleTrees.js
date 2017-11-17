/**
 * 
 */

const TestNBT = {
  value: "a",
  children: [
    {
      value: "b",
      children: [
        { value: "c", children: [] },
        { value: "c", children: [] },
        { value: "c", children: [] }
      ]
    },
    { value: "b", children: [] },
    { value: "b", children: [] },
    { value: "b", children: [] },
    { value: "b", children: [] },
    { value: "b", children: [] }
  ]
};

const TestBT = {
  value: 1,
  left: {
    value: 7,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 5,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: null,
      right: null
    }
  }
};

const TestBST = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 2,
        left: { value: 1, left: null, right: null },
        right: null
      },
      right: { value: 4, left: null, right: null }
    },
    right: {
      value: 7,
      left: { value: 6, left: null, right: null },
      right: {
        value: 9,
        left: { value: 8, left: null, right: null },
        right: null
      }
    }
  },
  right: {
    value: 15,
    left: {
      value: 13,
      left: {
        value: 11,
        left: null,
        right: { value: 12, left: {}, right: {} }
      },
      right: { value: 14, left: null, right: null }
    },
    right: {
      value: 17,
      left: { value: 16, left: null, right: null },
      right: {
        value: 19,
        left: { value: 18, left: null, right: null },
        right: { value: 20, left: null, right: null }
      }
    }
  }
};

module.exports = { TestNBT, TestBT, TestBST };
