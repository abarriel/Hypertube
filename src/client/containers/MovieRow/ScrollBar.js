import React from 'react';
import PropTypes from 'prop-types';

import { ScrollBarContainer, ScrollBarInner } from './styles';

const getScrollBarWidth = (width, length) => Math.ceil(width / length);

const getScrollBarMargin = (width, barWidth, start, length, end) => {
  const margin = (width - (barWidth + 200)) * ((start) / ((length + 1) - end));
  return margin;
};

const isScrollEnd = (start, end, length) => (start + end) >= length + 1;

const ScrollBar = ({
  start,
  length,
  end,
  width,
}) => (
  <ScrollBarContainer isEnd={isScrollEnd(start, end, length)}>
    <ScrollBarInner
      length={length}
      width={getScrollBarWidth(width, length)}
      margin={getScrollBarMargin(width, getScrollBarWidth(width, length), start, length, end)}
    />
  </ScrollBarContainer>
);

ScrollBar.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default ScrollBar;
