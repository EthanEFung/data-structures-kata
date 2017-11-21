class LinkList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function pushNode(value, list) {
  if (!list.next) {
    list.next = new LinkList(value);
    return list;
  }
  list.next = pushNode(value, list.next);
  return list;
}

function unshiftNode(value, head) {
  var n = new LinkList();
  n.value = value;
  n.next = head == null ? null : head;
  head = n;

  return head;
}

function insertNode(value, position, head) {
  if (position === 0) {
    let list = new LinkList(value);
    list.next = head;
    return list;
  }
  head.next = insertNode(value, position - 1, head.next);
  return head;
}

module.exports = {
  LinkList,
  pushNode,
  unshiftNode,
  insertNode
};
