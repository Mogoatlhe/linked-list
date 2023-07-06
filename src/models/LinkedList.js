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
  };
};

export default LinkedList;
