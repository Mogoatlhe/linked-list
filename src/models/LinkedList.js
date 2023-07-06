import Node from "./Node";

const LinkedList = () => {
  let head = null;

  const appendValue = (value) => {
    if (head === null) {
      head = Node();
      head.setValue(value);
      return;
    }

    let curr = head;

    while (curr !== null && curr.next !== null) {
      curr = curr.next;
    }

    curr.next = Node();
    curr.setValue(value);
  };

  return {
    appendValue,
  };
};

export default LinkedList;
