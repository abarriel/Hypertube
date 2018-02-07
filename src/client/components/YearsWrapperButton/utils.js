export const isAble = (from, to, id, value) => {
  if (value === 'from') return id <= to;
  return id >= from;
};
