export const deleteElementList = (list: any[], condition: (item) => void) => {
  const clone = [ ...list ];
  const index = clone.findIndex(condition);
  if (index > -1) { clone.splice(index, 1); }
  return clone;
};

