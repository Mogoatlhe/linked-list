const Node = () => {
  let value = null;
  let next = null;

  const setValue = (val) => {
    value = value;
  };

  const getValue = () => value;

  return {
    setValue,
    getValue,
    next,
  };
};

export default Node;
