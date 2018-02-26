
export const getColor = (value, min, max) => {
  const range = max - min;
  if (value < range / 2) return '#ff0a16';
  return '#46d369';
};
