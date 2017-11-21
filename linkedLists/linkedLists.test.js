const {
  LinkList,
  pushNode,
  unshiftNode,
  insertNode
} = require("./linkedLists");

describe("Linked List", function() {
  it("should have its own value", function() {
    const actual = new LinkList("Sam");
    expect(actual.value).toBeTruthy();
  });
  it("should have a reference to a next value set to null", function() {
    const actual = new LinkList("Adams");
    expect(actual.next).toBeNull();
  });
  it("should have a way to add a node to the end of a linked list", function() {
    let test = {
      value: 1,
      next: { value: 2, next: { value: 3, next: null } }
    };
    const expected = {
      value: 1,
      next: { value: 2, next: { value: 3, next: { value: 4, next: null } } }
    };
    test = pushNode(4, test);
    expect(test).toEqual(expected);
  });
  it("should have a way to reassign the head of the linked list", function() {
    let test = {
      value: 1,
      next: { value: 2, next: { value: 3, next: null } }
    };
    const expected = {
      value: 4,
      next: {
        value: 1,
        next: { value: 2, next: { value: 3, next: null } }
      }
    };
    test = unshiftNode(4, test);
    expect(test).toEqual(expected);
  });
  it("should have a method to insert a node in the center of the list", function() {
    const test = {
      value: 1,
      next: { value: 2, next: { value: 3, next: { value: 4, next: null } } }
    };
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: { value: "a", next: { value: 3, next: { value: 4, next: null } } }
      }
    };

    insertNode("a", 2, test);

    expect(test).toEqual(expected);
  });
});
