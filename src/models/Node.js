const Node = () => {
  let value = null;
  let next = null;

  const setValue = (val) => {
    value = value;
  };

  const getValue = () => value;

  const setNext = (node) => {
    next = node;
  };

  const getNext = () => next;

  return {
    setValue,
    setNext,
    getValue,
    getNext,
  };
};

export default Node;
