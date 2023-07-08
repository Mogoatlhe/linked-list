import Node from "./Node.js";

const LinkedList = () => {
  let head = null;

  const appendValue = (value) => {
    if (head === null) {
      head = _getNewNode(value);
      return;
    }

    let curr = head;

    while (curr !== null && curr.next !== null) {
      curr = curr.next;
    }

    curr.next = _getNewNode(value);
  };

  const prependValue = (value) => {
    if (head === null) {
      head = _getNewNode(value);
      return;
    }

    const newNode = _getNewNode(value);
    newNode.next = head.next;
    head.next = newNode;
  };

  const size = () => {
    let count = 0;
    let curr = head;

    while (curr !== null) {
      count += 1;
      curr = curr.next;
    }

    return count;
  };

  const getHead = () => head;

  const getTail = () => {
    let curr = head;

    for (; curr !== null && curr.next !== null; curr = curr.next);

    return curr;
  };

  const at = (index) => {
    let curr = head;
    let count = 0;

    if (count > index) return null;
    if (count === index) return head;

    while (curr !== null && count < index) {
      curr = curr.next;
      count += 1;

      if (count === index) {
        return curr;
      }
    }

    return curr;
  };

  const pop = () => {
    if (head === null) return;
    if (head.next === null) {
      head = null;
      return;
    }

    let curr = head;

    while (curr.next !== null) {
      if (curr.next.next === null) {
        curr.next = null;
      } else curr = curr.next;
    }
  };

  const contains = (value) => {
    if (head === null) return false;

    let curr = head;

    while (curr !== null) {
      if (curr.getValue() === value) return true;
      curr = curr.next;
    }

    return false;
  };

  const find = (value) => {
    if (head === null) return null;

    let curr = head;
    let count = 0;

    while (curr !== null) {
      if (curr.getValue() === value) return count;
      count += 1;
      curr = curr.next;
    }

    return null;
  };

  const _getNewNode = (value) => {
    const node = Node();
    node.setValue(value);

    return node;
  };

  return {
    appendValue,
    prependValue,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
  };
};

export default LinkedList;
