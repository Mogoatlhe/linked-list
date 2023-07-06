const Node = () => {
  let value = null;
  let next = null;

  const setValue = (val) => {
    value = val;
  };

  const getValue = () => value;

  return {
    setValue,
    getValue,
    next,
  };
};

export default Node;
