export const getScrollBarWidth = (width, length) => Math.ceil(width / length);

export const getScrollBarMargin = (width, barWidth, start, length, end) => (width - (barWidth + 200)) * (start / ((length + 1) - end));

export const isScrollEnd = (start, end, length) => (start + end) >= length + 1;

export const getMoveDirection = (start, end, id, length) => {
  if (id <= start + (Math.round(end / 2) - 2)) {
    if (start - 1 < 0) {
      return 0;
    }
    return -1;
  }
  if (start + 1 + end > length + 1) {
    return 0;
  }
  return 1;
};

export const isMovieHidden = (index, start, end) => index < start || index >= ((end + start) - 1);